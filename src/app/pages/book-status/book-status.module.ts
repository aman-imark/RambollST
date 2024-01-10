import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookStatusPageRoutingModule } from './book-status-routing.module';

import { BookStatusPage } from './book-status.page';

import { CustomTabsComponent } from '../../components/custom-tabs/custom-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookStatusPageRoutingModule
  ],
  declarations: [BookStatusPage, CustomTabsComponent]
})
export class BookStatusPageModule {}
