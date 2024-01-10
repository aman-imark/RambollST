import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  afterSelect: boolean = false;

  constructor(private router: Router) { }

  ionViewWillEnter(){
    this.afterSelect = false;
  }

  hotClick(){
    this.afterSelect = true;
  }

  coldClick(){
    this.afterSelect = true;
  }

  fineClick(){
    this.afterSelect = true;
  }

  goto_SustainablePage(){
    this.router.navigate(['sustainable']);
  }



}
