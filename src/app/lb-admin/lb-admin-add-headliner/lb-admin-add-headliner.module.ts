import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbAdminAddHeadlinerRoutingModule } from './lb-admin-add-headliner-routing.module';
import { LbAdminAddHeadlinerComponent } from './lb-admin-add-headliner/lb-admin-add-headliner.component';

@NgModule({
  declarations: [LbAdminAddHeadlinerComponent],
  imports: [
    CommonModule,
    LbAdminAddHeadlinerRoutingModule
  ]
})
export class LbAdminAddHeadlinerModule { }
