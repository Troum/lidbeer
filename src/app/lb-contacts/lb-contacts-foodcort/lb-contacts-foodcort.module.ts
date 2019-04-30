import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbContactsFoodcortRoutingModule } from './lb-contacts-foodcort-routing.module';
import { LbFeedbackFoodcortComponent } from './lb-feedback-foodcort/lb-feedback-foodcort.component';

@NgModule({
  declarations: [LbFeedbackFoodcortComponent],
  imports: [
    CommonModule,
    LbContactsFoodcortRoutingModule
  ]
})
export class LbContactsFoodcortModule { }
