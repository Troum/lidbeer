import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LbFeedbackFreeSceneComponent} from './lb-feedback-free-scene/lb-feedback-free-scene.component';

const routes: Routes = [
  {
    path: '',
    component: LbFeedbackFreeSceneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbContactsFreeSceneRoutingModule { }
