import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { HttpCapService } from 'src/app/services/http-cap.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-app-feedback',
  templateUrl: './app-feedback.page.html',
  styleUrls: ['./app-feedback.page.scss'],
})
export class AppFeedbackPage implements OnInit {

  
  showVar1: boolean = false;
  showVar2: boolean = false;
  showVar3: boolean = false;
  afterSelect: boolean = false;

  feedbackForm: FormGroup;
  submitted: boolean = false;


  constructor(private router: Router, private capHttp: HttpCapService, private toastCtrl: ToastController,
              private formBuilder: FormBuilder, private loadingCtrl: LoadingController, public ls: LoaderService) { }




  sendFeedback(){
    this.submitted = true;
    // console.log(this.feedbackForm.value)
    // console.log(this.feedbackForm.valid)

    if(this.feedbackForm.status === 'INVALID'){
      this.presentToast('Please fill the form!');
    }else if(this.feedbackForm.status === 'VALID'){
    this.capHttp.postFormData('/feedback.php', this.feedbackForm.value ).then((res: any) => { console.log(res);      
      // console.log(res.data);
      //  https://rambolldashboards.com/api/esp-outputs-api.php
      if(res.status === 'success'){
        this.afterSelect = true;
      }else{
        this.presentToast(res.status+': '+res.message);
      }
    }).catch( err => {
      //  alert(JSON.stringify(err));
    });
    }
  }





  toggleChild(val) {
    this.feedbackForm.controls['experience'].setValue(val);
    if(val == '1'){
      this.showVar1 = !this.showVar1;
      console.log( this.showVar1);
      this.showVar2 = false;
      this.showVar3 = false;
    }else if(val == '2'){
      this.showVar2 = !this.showVar2;
      this.showVar1 = false;
      this.showVar3 = false;
    }else if(val == '3'){
      this.showVar3 = !this.showVar3;
      this.showVar1 = false;
      this.showVar2 = false;
    }else{
      // this.showVar = !this.showVar;
    }
  }



 
  goto_SustainablePage(){
    this.router.navigate(['sustainable']);
  }



  


  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }



  get f() {
    return this.feedbackForm.controls;
  }


  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      // email: ["sandeep.gour@imarkinfotech.com", [Validators.email, Validators.required]],
      // password: ["12345678", [Validators.required, 

      location: ["Goodlife", [Validators.required]],
      message: ["", [Validators.required]],
      experience: ["", [Validators.required]]      
    });
  }

}
