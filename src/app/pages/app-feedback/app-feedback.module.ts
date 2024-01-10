import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppFeedbackPageRoutingModule } from './app-feedback-routing.module';

import { AppFeedbackPage } from './app-feedback.page';

import { CustomTabsComponent } from '../../components/custom-tabs/custom-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppFeedbackPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AppFeedbackPage, CustomTabsComponent]
})
export class AppFeedbackPageModule {}
