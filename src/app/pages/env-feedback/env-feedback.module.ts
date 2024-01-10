import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvFeedbackPageRoutingModule } from './env-feedback-routing.module';

import { EnvFeedbackPage } from './env-feedback.page';

import { CustomTabsComponent } from '../../components/custom-tabs/custom-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvFeedbackPageRoutingModule
  ],
  declarations: [EnvFeedbackPage, CustomTabsComponent]
})
export class EnvFeedbackPageModule {}
