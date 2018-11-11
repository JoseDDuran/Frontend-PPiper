import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing , appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { HttpClientModule } from "@angular/common/http";
//services
import { TestService } from './services/test.service';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
