import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LbFeedbackFoodcortComponent} from './lb-feedback-foodcort/lb-feedback-foodcort.component';

const routes: Routes = [
  {
    path: '',
    component: LbFeedbackFoodcortComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbContactsFoodcortRoutingModule { }
