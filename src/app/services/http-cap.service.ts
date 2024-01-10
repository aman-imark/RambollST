import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Http, HttpResponse, HttpOptions } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCapService {

  // https://rambolldashboards.com/api/esp-outputs-api.php
  
  public yourSiteUrl =  'https://rambolldashboards.com';
  public Baseurl: string = this.yourSiteUrl + '/api';
  // public Baseurl: string = this.yourSiteUrl;

  constructor(private platform: Platform) { }


  postData(Url, payload) {

    let nativeHeaders;
    let token;
    if(token === '') {
        nativeHeaders = {
           'Content-Type': 'application/json', 
           'Access-Control-Allow-Origin': '*', 
        };
    }else {
        nativeHeaders = {
           'Content-Type': 'application/json', 
           'Access-Control-Allow-Origin': '*',
          //  'Authorization': `Bearer ${token}`
        };
    }


      return new Promise(resolve => {
          if(this.platform.is('ios') || this.platform.is('android')) {
            Http.request({url: this.Baseurl+Url,  method: 'POST', data: payload, 
                          headers: nativeHeaders }).then(data => {
                // console.log(data);
                resolve(data.data);              
            }, (er) => {
                console.log(er);
                resolve(er);
            }).catch(err => {
                console.log(err);
                resolve(err);
            });            
          } else {
            Http.request({url: this.Baseurl+Url,  method: 'POST', data: payload, 
                          headers: nativeHeaders }).then(data => {
                resolve(data.data);
            }, (er) => {
                 console.log(er);
                 resolve(er);
            }).catch(err => {
                console.log(err);
                resolve(err);
            });
          }
      });
  }



  postFormData(Url,payload) {
    // CROS isssue comes when we using 'Content-Type': 'application/json' or 'enctype': 'multipart/form-data' 

    let nativeHeaders;
    let token;
    if(token === '') {
        nativeHeaders = {
           'Content-Type': 'multipart/form-data', 
           'Access-Control-Allow-Origin': '*', 
        };
    }else {
        nativeHeaders = {
           'Content-Type': 'multipart/form-data', 
           'Access-Control-Allow-Origin': '*',
          //  'Authorization': `Bearer ${token}`
        };
    }

      return new Promise(resolve => {

          if(this.platform.is('ios') || this.platform.is('android')) {
            Http.request({url: this.Baseurl+Url,  method: 'POST', data: payload, 
                          headers: nativeHeaders }).then(data => {
                // console.log(data);
                resolve(data.data);              
            }, (er) => {
                console.log(er);
                resolve(er);
            }).catch(err => {
                console.log(err);
                resolve(err);
            });
            
          } else {
            Http.request({url: this.Baseurl+Url,  method: 'POST', data: payload, 
                          headers: nativeHeaders }).then(data => {
                resolve(data.data);
            }, (er) => {
                 console.log(er);
                 resolve(er);
            }).catch(err => {
                console.log(err);
                resolve(err);
            });
          }
      });
  }



  

  getData(Url,token = '') {
    
    let nativeHeaders;

    if(token === '') {
        nativeHeaders = {
           'Content-Type': 'multipart/form-data', 
           'Access-Control-Allow-Origin': '*', 
        };
    }else {
        nativeHeaders = {
           'Content-Type': 'multipart/form-data', 
           'Access-Control-Allow-Origin': '*',
           'Authorization': `Bearer ${token}`
        };
    }

    return new Promise(resolve => { 
      Http.request({url: this.Baseurl+Url,  method: 'GET', headers: nativeHeaders }).then(data => {
          // console.log(data);
          // const d = JSON.parse(data.data);
          resolve(data.data);

      }).catch(error => {
          console.log(error);
          // const er = JSON.parse(error.error);
          resolve(error);
      });
    })
  }





}
