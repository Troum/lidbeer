import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbLogoutRoutingModule } from './lb-logout-routing.module';
import { LbLogoutComponent } from './lb-logout/lb-logout.component';

@NgModule({
  declarations: [LbLogoutComponent],
  imports: [
    CommonModule,
    LbLogoutRoutingModule
  ]
})
export class LbLogoutModule { }
