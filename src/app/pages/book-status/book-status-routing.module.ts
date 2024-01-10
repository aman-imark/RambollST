import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookStatusPage } from './book-status.page';

const routes: Routes = [
  {
    path: '',
    component: BookStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookStatusPageRoutingModule {}
