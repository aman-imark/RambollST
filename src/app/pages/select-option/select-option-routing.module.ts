import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectOptionPage } from './select-option.page';

const routes: Routes = [
  {
    path: '',
    component: SelectOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectOptionPageRoutingModule {}
