import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SustainablePage } from './sustainable.page';

const routes: Routes = [
  {
    path: '',
    component: SustainablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SustainablePageRoutingModule {}
