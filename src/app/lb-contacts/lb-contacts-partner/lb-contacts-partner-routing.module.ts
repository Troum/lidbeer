import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LbFeedbackPartnerComponent} from './lb-feedback-partner/lb-feedback-partner.component';

const routes: Routes = [
  {
    path: '',
    component: LbFeedbackPartnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbContactsPartnerRoutingModule { }
