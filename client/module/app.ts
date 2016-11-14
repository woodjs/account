import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import '../config/rxjs-extension';

import {appRoute} from '../route/app';

import {AppComponent} from '../component/app';
import {LoginComponent} from '../component/login';
import {IndexComponent} from '../component/index';

import {LoginMock} from '../mock/login';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoute,
    InMemoryWebApiModule.forRoot(LoginMock)
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}