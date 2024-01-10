import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableBookPageRoutingModule } from './table-book-routing.module';

import { TableBookPage } from './table-book.page';

import { CustomTabsComponent } from '../../components/custom-tabs/custom-tabs.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableBookPageRoutingModule
  ],
  declarations: [TableBookPage, CustomTabsComponent]
})
export class TableBookPageModule {}
