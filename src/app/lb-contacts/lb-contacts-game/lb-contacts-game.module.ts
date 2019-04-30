import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbContactsGameRoutingModule } from './lb-contacts-game-routing.module';
import { LbFeedbackGameComponent } from './lb-feedback-game/lb-feedback-game.component';

@NgModule({
  declarations: [LbFeedbackGameComponent],
  imports: [
    CommonModule,
    LbContactsGameRoutingModule
  ]
})
export class LbContactsGameModule { }
