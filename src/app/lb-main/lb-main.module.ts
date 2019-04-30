import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbMainRoutingModule } from './lb-main-routing.module';
import { LbMainComponent } from './lb-main/lb-main.component';
import { LbSharedModule } from '../lb-shared/lb-shared.module';

@NgModule({
  declarations: [LbMainComponent],
    imports: [
        CommonModule,
        LbMainRoutingModule,
        LbSharedModule
    ]
})
export class LbMainModule { }
