import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LbAdminAddCraftParticipantComponent} from './lb-admin-add-craft-participant/lb-admin-add-craft-participant.component';

const routes: Routes = [
  {
    path: '',
    component: LbAdminAddCraftParticipantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbAdminAddCraftParticipantRoutingModule { }
