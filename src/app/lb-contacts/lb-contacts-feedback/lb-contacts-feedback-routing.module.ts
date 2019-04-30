import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LbContactsFeedbackComponent} from './lb-contacts-feedback/lb-contacts-feedback.component';

const routes: Routes = [
  {
    path: '',
    component: LbContactsFeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbContactsFeedbackRoutingModule { }
