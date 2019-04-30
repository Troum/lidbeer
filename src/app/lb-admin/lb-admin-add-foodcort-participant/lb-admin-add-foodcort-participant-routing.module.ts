import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LbAdminAddFoodcortParticipantComponent} from './lb-admin-add-foodcort-participant/lb-admin-add-foodcort-participant.component';

const routes: Routes = [
  {
    path: '',
    component: LbAdminAddFoodcortParticipantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbAdminAddFoodcortParticipantRoutingModule { }
