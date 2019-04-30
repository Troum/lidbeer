import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbGalaConcertRoutingModule } from './lb-gala-concert-routing.module';
import { LbGalaConcertComponent } from './lb-gala-concert/lb-gala-concert.component';

@NgModule({
  declarations: [LbGalaConcertComponent],
  imports: [
    CommonModule,
    LbGalaConcertRoutingModule
  ]
})
export class LbGalaConcertModule { }
