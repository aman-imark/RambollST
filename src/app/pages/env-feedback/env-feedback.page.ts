import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-env-feedback',
  templateUrl: './env-feedback.page.html',
  styleUrls: ['./env-feedback.page.scss'],
})
export class EnvFeedbackPage implements OnInit {

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


  goto_SustainablePage(){
    this.router.navigate(['sustainable']);
  }


  ngOnInit() { }

}
