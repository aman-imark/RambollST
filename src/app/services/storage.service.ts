import { Injectable } from '@angular/core';

import { Preferences } from '@capacitor/preferences';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private toastCtrl: ToastController) { }



  // for object data set
    async setStore(key_name: string, key_data: any){
        await Preferences.set({ key: key_name, value: JSON.stringify(key_data) });
    }
    
  
    async getStore(key_name: string): Promise<{ value: any }>{
        const ret = await Preferences.get({ key: key_name });
        return JSON.parse(ret.value);
    }
  
  
    async removeStore(key_name: string){
      await Preferences.remove({ key: key_name });
    }
  
  
    async clear() {
      await Preferences.clear();
    }


    async prToast(message) {
      const toast = await this.toastCtrl.create({
        message: message,
        duration: 1500,
        color: 'dark',
        position: 'bottom'
      });
  
      await toast.present();
    }
}
