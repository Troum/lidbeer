import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbContactsPartnerRoutingModule } from './lb-contacts-partner-routing.module';
import { LbFeedbackPartnerComponent } from './lb-feedback-partner/lb-feedback-partner.component';
import { LbSharedModule } from '../../lb-shared/lb-shared.module';

@NgModule({
  declarations: [LbFeedbackPartnerComponent],
  imports: [
    CommonModule,
    LbContactsPartnerRoutingModule,
    LbSharedModule
  ]
})
export class LbContactsPartnerModule { }
