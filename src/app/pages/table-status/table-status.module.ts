import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableStatusPageRoutingModule } from './table-status-routing.module';

import { TableStatusPage } from './table-status.page';

import { CustomTabsComponent } from '../../components/custom-tabs/custom-tabs.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableStatusPageRoutingModule
  ],
  declarations: [TableStatusPage, CustomTabsComponent]
})
export class TableStatusPageModule {}
