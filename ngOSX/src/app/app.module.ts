import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthComponent} from './auth/auth.component';
import {HomeComponent} from './home/home.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

const importModules: any = [
  BrowserModule,
  AppRoutingModule,
  MDBBootstrapModule
];

@NgModule({
  imports: importModules,
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}