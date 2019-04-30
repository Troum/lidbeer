import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LbMainComponent} from './lb-main/lb-main.component';

const routes: Routes = [
  {
    path: '',
    component: LbMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbMainRoutingModule { }
