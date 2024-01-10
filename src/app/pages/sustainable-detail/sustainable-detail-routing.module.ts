import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SustainableDetailPage } from './sustainable-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SustainableDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SustainableDetailPageRoutingModule {}
