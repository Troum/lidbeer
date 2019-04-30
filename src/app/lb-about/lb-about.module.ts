import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbAboutRoutingModule } from './lb-about-routing.module';
import { LbAboutComponent } from './lb-about/lb-about.component';

@NgModule({
  declarations: [LbAboutComponent],
  imports: [
    CommonModule,
    LbAboutRoutingModule
  ]
})
export class LbAboutModule { }
