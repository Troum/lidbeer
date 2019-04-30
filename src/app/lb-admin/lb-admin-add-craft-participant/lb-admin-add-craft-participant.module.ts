import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbAdminAddCraftParticipantRoutingModule } from './lb-admin-add-craft-participant-routing.module';
import { LbAdminAddCraftParticipantComponent } from './lb-admin-add-craft-participant/lb-admin-add-craft-participant.component';

@NgModule({
  declarations: [LbAdminAddCraftParticipantComponent],
  imports: [
    CommonModule,
    LbAdminAddCraftParticipantRoutingModule
  ]
})
export class LbAdminAddCraftParticipantModule { }
