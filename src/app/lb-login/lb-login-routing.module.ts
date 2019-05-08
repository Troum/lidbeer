import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LbLoginComponent } from './lb-login/lb-login.component';

const routes: Routes = [
  {
    path: '',
    component: LbLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbLoginRoutingModule { }
