import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-saver',
  templateUrl: './screen-saver.page.html',
  styleUrls: ['./screen-saver.page.scss'],
})
export class ScreenSaverPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  screenSaverClose(){
    console.log('efhuihgiuw');  



  }

  ngOnInit() {
  }

}
