import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LbLogoutComponent} from './lb-logout/lb-logout.component';

const routes: Routes = [
  {
    path: '',
    component: LbLogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbLogoutRoutingModule { }
