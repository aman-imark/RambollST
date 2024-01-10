import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectOptionPageRoutingModule } from './select-option-routing.module';

import { SelectOptionPage } from './select-option.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectOptionPageRoutingModule
  ],
  declarations: [SelectOptionPage]
})
export class SelectOptionPageModule {}
