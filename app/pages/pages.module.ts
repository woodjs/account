import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {routing} from './pages.routing';

@NgModule({
  imports: [
    NgModule,
    routing
  ],
  declarations: [
    PagesComponent
  ]
})
export class PagesModule {
}