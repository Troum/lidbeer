import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LbAdminAddHeadlinerComponent} from './lb-admin-add-headliner/lb-admin-add-headliner.component';

const routes: Routes = [
  {
    path: '',
    component: LbAdminAddHeadlinerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbAdminAddHeadlinerRoutingModule { }
