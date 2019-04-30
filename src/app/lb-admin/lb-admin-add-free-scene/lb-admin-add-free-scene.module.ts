import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbAdminAddFreeSceneRoutingModule } from './lb-admin-add-free-scene-routing.module';
import { LbAdminAddFreeSceneComponent } from './lb-admin-add-free-scene/lb-admin-add-free-scene.component';

@NgModule({
  declarations: [LbAdminAddFreeSceneComponent],
  imports: [
    CommonModule,
    LbAdminAddFreeSceneRoutingModule
  ]
})
export class LbAdminAddFreeSceneModule { }
