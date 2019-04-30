import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LbGalaConcertComponent} from './lb-gala-concert/lb-gala-concert.component';

const routes: Routes = [
  {
    path: '',
    component: LbGalaConcertComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbGalaConcertRoutingModule { }
