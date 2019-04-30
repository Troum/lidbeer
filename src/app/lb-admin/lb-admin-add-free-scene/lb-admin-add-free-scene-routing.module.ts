import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LbAdminAddFreeSceneComponent} from './lb-admin-add-free-scene/lb-admin-add-free-scene.component';

const routes: Routes = [
  {
    path: '',
    component: LbAdminAddFreeSceneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbAdminAddFreeSceneRoutingModule { }
