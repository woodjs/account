import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import './config/rxjs-extension';

import {PagesModule} from './pages/pages.module';
import {AppComponent} from './app.component';
import {routing} from './app.routing';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    routing,
    PagesModule,
    InMemoryWebApiModule.forRoot(null)
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule{
}