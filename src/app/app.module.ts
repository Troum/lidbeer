import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LbNavbarComponent } from './lb-navbar/lb-navbar.component';
import { LbSharedModule } from './lb-shared/lb-shared.module';
import { HttpService } from './_services/http-service/http.service';

@NgModule({
  declarations: [
    AppComponent,
    LbNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LbSharedModule,
    HttpClientModule
  ],
  providers: [
      HttpService
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
