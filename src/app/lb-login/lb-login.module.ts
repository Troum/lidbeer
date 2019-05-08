import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbLoginRoutingModule } from './lb-login-routing.module';
import { LbLoginComponent } from './lb-login/lb-login.component';

@NgModule({
  declarations: [LbLoginComponent],
  imports: [
    CommonModule,
    LbLoginRoutingModule
  ]
})
export class LbLoginModule { }
