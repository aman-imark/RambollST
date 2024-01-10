import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvFeedbackPage } from './env-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: EnvFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvFeedbackPageRoutingModule {}
