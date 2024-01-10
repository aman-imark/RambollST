import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { LoadingController } from '@ionic/angular'

import { ToastController } from '@ionic/angular';
import { HttpCapService } from 'src/app/services/http-cap.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  queueData: any;
  setIntervalFun: any;


  todayDT = Date.now();

  constructor(private router: Router, public capHttp: HttpCapService) 
    
    {

    }


    

  ionViewDidEnter(){
    console.log('Page Enter');
    this.checkAverage_WaitingTime();
    // this.setIntervalFun = setInterval( () => {
    //     this.checkAverage_WaitingTime();
    // }, 8000)
  }



  ionViewDidLeave(){
    // console.log('Page leave')
    // clearInterval(this.setIntervalFun);
  }




  checkAverage_WaitingTime(){
    console.log('Queue Checker called')
    this.capHttp.getData('/queue-checker.php').then((res:any) => { console.log(res);      
      console.log(res.data);
      if(res.status === 'success'){
         this.queueData = res.data;
      }else{
      }
    }).catch( err => {
      //  alert(JSON.stringify(err));
    });
   }



   
  doRefresh(event) {
    console.log('Begin async operation');
    this.checkAverage_WaitingTime();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }



  goto_tableOptions(){
     this.router.navigate(['/tabs/tab3'])
  }

}
