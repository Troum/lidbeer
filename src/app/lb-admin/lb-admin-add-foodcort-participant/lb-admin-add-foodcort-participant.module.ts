import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbAdminAddFoodcortParticipantRoutingModule } from './lb-admin-add-foodcort-participant-routing.module';
import { LbAdminAddFoodcortParticipantComponent } from './lb-admin-add-foodcort-participant/lb-admin-add-foodcort-participant.component';

@NgModule({
  declarations: [LbAdminAddFoodcortParticipantComponent],
  imports: [
    CommonModule,
    LbAdminAddFoodcortParticipantRoutingModule
  ]
})
export class LbAdminAddFoodcortParticipantModule { }
