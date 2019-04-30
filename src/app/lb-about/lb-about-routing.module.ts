import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LbAboutComponent} from './lb-about/lb-about.component';

const routes: Routes = [
  {
    path: '',
    component: LbAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbAboutRoutingModule { }
