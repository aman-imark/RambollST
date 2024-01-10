import { Component } from '@angular/core';



@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  activeTab: any;

  constructor() {}

  getActiveTab(ev){
    // console.log(ev)
    this.activeTab = ev.tab;
    // console.log(this.activeTab);
  }

}
