import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbContactsFreeSceneRoutingModule } from './lb-contacts-free-scene-routing.module';
import { LbFeedbackFreeSceneComponent } from './lb-feedback-free-scene/lb-feedback-free-scene.component';

@NgModule({
  declarations: [LbFeedbackFreeSceneComponent],
  imports: [
    CommonModule,
    LbContactsFreeSceneRoutingModule
  ]
})
export class LbContactsFreeSceneModule { }
