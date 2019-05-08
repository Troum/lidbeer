import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LbRegisterComponent} from './lb-register/lb-register.component';

const routes: Routes = [
  {
    path: '',
    component: LbRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbRegisterRoutingModule { }
