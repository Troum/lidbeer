import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LbAdminRoutingModule } from './lb-admin-routing.module';
import { LbAdminComponent } from './lb-admin.component';
import { LbAdminSidenavComponent } from './lb-admin-sidenav/lb-admin-sidenav.component';
import { LbSharedModule } from '../lb-shared/lb-shared.module';

@NgModule({
  declarations: [LbAdminComponent, LbAdminSidenavComponent],
    imports: [
        CommonModule,
        LbAdminRoutingModule,
        LbSharedModule
    ]
})
export class LbAdminModule { }
