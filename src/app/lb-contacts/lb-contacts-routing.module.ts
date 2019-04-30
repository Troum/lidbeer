import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LbContactsComponent } from './lb-contacts/lb-contacts.component';

const routes: Routes = [
  {
    path: '',
    component: LbContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbContactsRoutingModule { }
