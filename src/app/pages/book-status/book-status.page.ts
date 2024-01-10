import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { HttpCapService } from 'src/app/services/http-cap.service';
import { LoadingController } from '@ionic/angular'

import { Device } from '@awesome-cordova-plugins/device/ngx';
import { StorageService } from 'src/app/services/storage.service';
import { LoaderService } from 'src/app/services/loader.service';


@Component({
  selector: 'app-book-status',
  templateUrl: './book-status.page.html',
  styleUrls: ['./book-status.page.scss'],
})
export class BookStatusPage implements OnInit {


  tableBookingCancel: boolean = false;

  bookedTableData: any;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private loadingCtrl: LoadingController,
    private capHttp: HttpCapService, private alertCtrl: AlertController, public ls: LoaderService, 
    private toastCtrl: ToastController, public checkStr: StorageService) 
    
    { }



ionViewDidEnter(){
  this.getBookedData();
}


//  On Session storage get and remove data
getBookedData(){
  this.checkStr.getStore('bookedTableData').then((data:any) => { 
    console.log(data);
    if(data != null || data != '' || typeof(data) != 'undefined'){
      this.bookedTableData = data;
    }      
   }).catch( err => {     
  });
}


removedBookedData(){
  this.checkStr.removeStore('bookedTableData');
}



//If need to Table booking canceled (cancel booking button or confirm)
async cancelBooking(){
  const alert = await this.alertCtrl.create({
    message: 'Are you sure, want to cancel booking?',
    cssClass:'alertCSS',
    buttons: [
      {
        text: 'No',
        role: 'cancel'
      },
      {
        text: 'Yes',
        role: 'Yes',
        handler: () => {
           this.confirmCancelBooking();
        },
      },
    ],
  });

  await alert.present();
  const { role } = await alert.onDidDismiss();
}


confirmCancelBooking(){
  let cancelData = {
    id: this.bookedTableData.TBid,
    tablenumber: this.bookedTableData.TBnum
  }
  console.log(cancelData);
  if(this.bookedTableData.TBid && this.bookedTableData.TBnum){
    this.capHttp.postFormData('/table-cancel.php', cancelData).then((res:any) => { console.log(res);   
      if(res.status === 'success'){
        this.tableBookingCancel = true;
        this.removedBookedData();
      }else{
        this.presentToast(res.status+':'+res.message);
      }
    }).catch( err => { //  alert(JSON.stringify(err));    
    });
  }else{
    this.presentToast('!Wrong: Table number or id missing...');
  } 
}




  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });
  
    await toast.present();
  }



  ngOnInit() {
  }

}
