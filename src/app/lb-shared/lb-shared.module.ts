import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CollapseDirective} from '../_directives/collapse.directive';
import {LbFooterComponent} from '../lb-footer/lb-footer.component';
import { LbTicketButtonComponent } from '../lb-ticket-button/lb-ticket-button.component';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '../_directives/button.directive';
import { LbPhoneComponent } from '../lb-phone/lb-phone.component';
import { NgxMaskModule } from 'ngx-mask';
import { PluralizePipe } from '../_pipes/pluralize.pipe';

@NgModule({
  declarations: [
    CollapseDirective,
    ButtonDirective,
    LbFooterComponent,
    LbTicketButtonComponent,
    LbPhoneComponent,
    PluralizePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    PluralizePipe
  ],
  exports: [
    CollapseDirective,
    ButtonDirective,
    LbFooterComponent,
    LbTicketButtonComponent,
    LbPhoneComponent,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule
  ]
})
export class LbSharedModule { }
