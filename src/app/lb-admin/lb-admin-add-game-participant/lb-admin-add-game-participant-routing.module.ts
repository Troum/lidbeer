import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LbAdminAddGameParticipantComponent} from './lb-admin-add-game-participant/lb-admin-add-game-participant.component';

const routes: Routes = [
  {
    path: '',
    component: LbAdminAddGameParticipantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbAdminAddGameParticipantRoutingModule { }
