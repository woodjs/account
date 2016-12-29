import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import './config/rxjs-extension';

import {FrameModule} from './frame/frame.module';
import {PagesModule} from './pages/pages.module';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {AppEventService, LayoutStateService} from "./app.service";

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    routing,
    PagesModule,
    FrameModule,
    InMemoryWebApiModule.forRoot(null)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {provide: 'appEvent', useClass: AppEventService},
    {provide: 'layoutState', useClass: LayoutStateService}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule{
}