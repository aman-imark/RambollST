import { Component } from '@angular/core';


import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';


import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  idleState = 'Not started.';
  timedOut = false;


  constructor(private router: Router, private idle: Idle, private toastController: ToastController, 
    private screenOrientation: ScreenOrientation, public platform: Platform) 
  
  
  {
    SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
    this.router.navigate(['']);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    if(this.platform.is('ipad') || this.platform.is('tablet')){
       this.screenIdle();
    }
  }


  screenIdle(){
      // sets an idle timeout of 5 seconds, for testing purposes.
      this.idle.setIdle(10);
      // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
      this.idle.setTimeout(5);
      // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
      this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);  
      this.idle.onIdleEnd.subscribe(() => { 
        this.idleState = 'No longer idle.';
        console.log(this.idleState);
        this.reset();
      });
      
      this.idle.onTimeout.subscribe(() => {
        this.idleState = 'Timed out!';
        this.timedOut = true;
        console.log(this.idleState);
        this.msgToast(this.idleState);
        this.showScreenSaverPage();
      });
      
      this.idle.onIdleStart.subscribe(() => {
          this.idleState = 'You\'ve gone idle!';
          console.log(this.idleState);
          // this.childModal.show();
      });
      
      this.idle.onTimeoutWarning.subscribe((countdown) => {
        this.idleState = 'You will be Idle in ' + countdown + ' seconds!';
        console.log(this.idleState);
        this.msgToast(this.idleState);
      });
      
      this.reset();
  }



  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }



  showScreenSaverPage(){
    this.router.navigate(['screen-saver']);
  }
  



  async msgToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'middle'
    });
    await toast.present();
  }


}
