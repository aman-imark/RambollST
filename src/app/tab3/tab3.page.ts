import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private router: Router) { }


  tableClick(btnId){
    this.router.navigate(['table-book'], {queryParams: {'loaction': btnId}});
  }


  ngOnInit() {
  }

}
