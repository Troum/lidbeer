import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbContactsCraftRoutingModule } from './lb-contacts-craft-routing.module';
import { LbFeedbackCraftComponent } from './lb-feedback-craft/lb-feedback-craft.component';

@NgModule({
  declarations: [LbFeedbackCraftComponent],
  imports: [
    CommonModule,
    LbContactsCraftRoutingModule
  ]
})
export class LbContactsCraftModule { }
