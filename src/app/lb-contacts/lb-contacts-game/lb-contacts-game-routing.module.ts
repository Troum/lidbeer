import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LbFeedbackGameComponent} from './lb-feedback-game/lb-feedback-game.component';

const routes: Routes = [
  {
    path: '',
    component: LbFeedbackGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbContactsGameRoutingModule { }
