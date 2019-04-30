import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbContactsRoutingModule } from './lb-contacts-routing.module';
import { LbContactsComponent } from './lb-contacts/lb-contacts.component';
import {LbSharedModule} from '../lb-shared/lb-shared.module';

@NgModule({
  declarations: [LbContactsComponent],
    imports: [
        CommonModule,
        LbContactsRoutingModule,
        LbSharedModule
    ]
})
export class LbContactsModule { }
