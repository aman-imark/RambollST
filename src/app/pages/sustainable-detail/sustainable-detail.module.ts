import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SustainableDetailPageRoutingModule } from './sustainable-detail-routing.module';

import { SustainableDetailPage } from './sustainable-detail.page';

import { CustomTabsComponent } from '../../components/custom-tabs/custom-tabs.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SustainableDetailPageRoutingModule
  ],
  declarations: [SustainableDetailPage, CustomTabsComponent]
})
export class SustainableDetailPageModule {}
