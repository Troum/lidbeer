import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbRegisterRoutingModule } from './lb-register-routing.module';
import { LbRegisterComponent } from './lb-register/lb-register.component';
import {LbSharedModule} from '../lb-shared/lb-shared.module';

@NgModule({
  declarations: [LbRegisterComponent],
  imports: [
    CommonModule,
    LbRegisterRoutingModule,
    LbSharedModule
  ]
})
export class LbRegisterModule { }
