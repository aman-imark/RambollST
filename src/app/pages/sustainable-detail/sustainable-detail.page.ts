import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sustainable-detail',
  templateUrl: './sustainable-detail.page.html',
  styleUrls: ['./sustainable-detail.page.scss'],
})
export class SustainableDetailPage implements OnInit {

  sus_title;
  sus_image;
  sus_desc;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.activatedRoute.queryParams.subscribe((res)=>{
        console.log(res)
         this.sus_title = res.title;
         this.sus_image = res.image;
         this.sus_desc = res.desc;
       });
  }

}
