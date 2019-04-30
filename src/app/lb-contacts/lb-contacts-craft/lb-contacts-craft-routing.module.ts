import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LbFeedbackCraftComponent} from './lb-feedback-craft/lb-feedback-craft.component';

const routes: Routes = [
  {
    path: '',
    component: LbFeedbackCraftComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbContactsCraftRoutingModule { }
