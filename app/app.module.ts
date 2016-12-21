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
import {FrameHeaderComponent} from "./frame/components/frame-header/frame-header.component";
import {FrameMainComponent} from "./frame/components/frame-main/frame-main.component";
import {FrameFooterComponent} from "./frame/components/frame-footer/frame-footer.component";

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
  bootstrap: [
    AppComponent
  ]
})
export class AppModule{
}