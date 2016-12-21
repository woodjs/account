import {NgModule} from '@angular/core';

import {routing} from './tables.routing';
import {TablesComponent} from './tables.component';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    TablesComponent
  ]
})
export class TablesModule {
}