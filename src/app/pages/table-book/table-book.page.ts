import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { LoadingController, AlertController } from '@ionic/angular'

import { ToastController } from '@ionic/angular';
import { HttpCapService } from 'src/app/services/http-cap.service';

import { Device } from '@awesome-cordova-plugins/device/ngx';
import { StorageService } from 'src/app/services/storage.service';
import { IonContent } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-table-book',
  templateUrl: './table-book.page.html',
  styleUrls: ['./table-book.page.scss'],
})
export class TableBookPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  selectedLocation: any = '1';
  selectedTBnum: any = '';
  selectedTBfloor: any = '';
  selectedTBname: any = '';


  bookingTime: any;

  
 footerTableDetails: boolean = false;
 tableBookData: any;

 locationData: any =[
  {
    id: "1",
    name: "L1 - TTSH Kopitiam",
    cname: "TTSH Kopitiam",
    image: "",
    other: "L1 FLOOR"
  }]; 


  table_1;
  table_2;
  table_3;
  table_4;
  table_5;
  table_6;
  table_7;
  table_8;
  table_9;
  table_10;
  table_11;
  table_12;
  table_13;



 bookedTableData: any;
 isButtonDisabled = false;


constructor(private router: Router, private vibration: Vibration, private device: Device,
           public capHttp: HttpCapService, private toastCtrl: ToastController, private alertCtrl: AlertController,
           private activatedRoute: ActivatedRoute, public checkStr: StorageService, public ls: LoaderService)

{
  this.selectedLocation = this.activatedRoute.snapshot.queryParamMap.get('loaction')
  this.footerTableDetails = false;
  this.selectedTBnum = '';
}


ngOnInit() {
  // console.log(this.device);
}


ionViewWillEnter(){
  this.footerTableDetails = false;
  this.selectedTBnum = '';
  this.selectedTBfloor = '';
  this.selectedTBname = '';
  this.bookingTime = '';  
  this.checkTable_Aviablity();
  this.getUUID_bookedTable();
}


ionViewDidLeave(){
  // console.log('Page leave hit')
  this.footerTableDetails = false;
  this.selectedTBnum = '';
  this.selectedTBfloor = '';
  this.selectedTBname = '';
  this.bookingTime = '';  
  // this.checkTable_Aviablity();
  // this.getUUID_bookedTable();
}


doRefresh(event) {
  setTimeout(() => {
    this.checkTable_Aviablity();
    this.getUUID_bookedTable();
    event.target.complete();
  }, 2000);
}




getUUID_bookedTable(){
  // console.log(this.device.uuid);
  this.capHttp.postFormData('/booked-seats.php', {"uuid" : this.device.uuid} ).then((res:any) => {  console.log(res);      
    // console.log(res.data);
    if(res.status === 'success'){
      this.bookedTableData = res.data;
    }else{
      this.presentToast(res.status+': '+res.message);
    }
  }).catch( err => {
  });
}



checkTable_Aviablity(){
  // console.log("location: "+ this.selectedLocation);
  this.capHttp.postFormData('/esp-outputs-api.php', {"location" : this.selectedLocation} ).then((res:any) => {  console.log(res);      
    // console.log(res.data);
    if(res.status === 'success'){
      // this.tableA_occp = res.data[0].occupied;
      // this.tableB_occp = res.data[1].occupied;
      // this.tableC_occp = res.data[2].occupied;

      this.table_1 = res.data[0].occupied;
      this.table_2 = res.data[1].occupied;
      this.table_3 = res.data[2].occupied;
      this.table_4 = res.data[3].occupied;
      this.table_5 = res.data[4].occupied;
      this.table_6 = res.data[5].occupied;
      this.table_7 = res.data[6].occupied;
      this.table_8 = res.data[7].occupied;
      this.table_9 = res.data[8].occupied;
      this.table_10 = res.data[9].occupied;
      this.table_11 = res.data[10].occupied;
      this.table_12 = res.data[11].occupied;
    }else{
      this.presentToast(res.status+': '+res.message);
    }
  }).catch( err => {
  });
}




locationSelection(ev){
  // console.log(ev.detail.value);
  // console.log(this.selectedLocation); 
  this.selectedTBnum = '';
  this.selectedTBfloor = '';
  this.selectedTBname = ''; 
  this.bookingTime = '';  
  this.footerTableDetails = false;
  this.checkTable_Aviablity();
}


ScrollToPoint(X, Y) {
  this.content.scrollToPoint(X, Y, 100);
}

 clickOnTable(tableId){
    console.log(tableId);
    //  this.content.scrollToBottom(100);
    this.ScrollToPoint(0, 220);

     this.selectedTBnum = tableId;
     this.selectedTBfloor = this.locationData[0].other;
     this.selectedTBname = this.locationData[0].name;
     this.footerTableDetails = true;
     this.vibration.vibrate(20);
 }



 bookAnTable(num, floor, name){
  let tableData = {
    sensor: "EC-SR002",
    location: this.selectedLocation, 
    tablenumber: num,
    occupied: "1",
    bookingtime: this.bookingTime,
    uuid: this.device.uuid
  }

  console.log(tableData);
    if(this.bookingTime && this.selectedLocation && num && this.device.uuid){
      this.capHttp.postFormData('/esp-output-action-api.php', tableData).then((res:any) => {  console.log('call');
        if(res.status === 'success'){
            let bookedData = {
               device_UUID: this.device.uuid,
               TBid: res.id,
               TBloc: this.selectedLocation,
               TBnum: this.selectedTBnum, 
               TBfloor: this.selectedTBfloor, 
               TBname: this.selectedTBname,
               TBtime: this.bookingTime,
               CouponStatus: res.couponstatus
             };
             this.checkStr.setStore('bookedTableData', bookedData);
             setTimeout( () => {
               this.router.navigate(['book-status']);                                         
             }, 500);
        }else{
          this.presentToast(res.status+': '+res.message);
        }
      }).catch( err => {
      });
    }else if(!this.bookingTime){
      this.presentToast('!Please select a time for table booking...');
    }else if(!num){
      this.presentToast('!Error: Table number not found...');
    }else if(!this.selectedLocation){
      this.presentToast('!Error: Table location not found...');
    }else if(!this.device.uuid){
      this.presentToast('!Error: Device UUId not found...');
    }else{
      this.presentToast('!Error: Somthing wrong...');
    }
  // }
 }


//  When booked an table two buttons
 confirmBooking(){
    this.isButtonDisabled = true;

    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 2000);
   this.bookAnTable(this.selectedTBnum, this.selectedTBfloor, this.selectedTBname);   
 }

 cancelClick(){
  this.content.scrollToTop(100);
  this.selectedTBnum = '';
  this.selectedTBfloor = '';
  this.selectedTBname = '';
  this.footerTableDetails = false;
 }




//If need to Table booking canceled (cancel booking button or confirm)
async cancelBooking(TBid, TBnum){
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
           this.confirmCancelBooking(TBid, TBnum);
        },
      },
    ],
  });

  await alert.present();
  const { role } = await alert.onDidDismiss();
}





confirmCancelBooking(TBid, TBnum){
  let cancelData = {
    id: TBnum,
    tablenumber: TBid
  }
  console.log(cancelData);
  if(TBid && TBnum){
    this.capHttp.postFormData('/table-cancel.php', cancelData).then((res:any) => { console.log(res);    
      if(res.status === 'success'){
        this.checkTable_Aviablity();
        this.getUUID_bookedTable();
      }else{
        this.presentToast(res.status+':'+res.message);
      }
    }).catch( err => { 
    });
  }else{
    this.presentToast('!Error: Table number or id missing...');
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



}
