import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbAdminAddGameParticipantRoutingModule } from './lb-admin-add-game-participant-routing.module';
import { LbAdminAddGameParticipantComponent } from './lb-admin-add-game-participant/lb-admin-add-game-participant.component';

@NgModule({
  declarations: [LbAdminAddGameParticipantComponent],
  imports: [
    CommonModule,
    LbAdminAddGameParticipantRoutingModule
  ]
})
export class LbAdminAddGameParticipantModule { }
