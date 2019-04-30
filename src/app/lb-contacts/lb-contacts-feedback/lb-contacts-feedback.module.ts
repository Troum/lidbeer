import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbContactsFeedbackRoutingModule } from './lb-contacts-feedback-routing.module';
import { LbContactsFeedbackComponent } from './lb-contacts-feedback/lb-contacts-feedback.component';
import { LbSharedModule } from '../../lb-shared/lb-shared.module';

@NgModule({
  declarations: [LbContactsFeedbackComponent],
  imports: [
    CommonModule,
    LbContactsFeedbackRoutingModule,
    LbSharedModule
  ]
})
export class LbContactsFeedbackModule { }
