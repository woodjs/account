import {NgModule} from '@angular/core';

import {routing} from './forms.routing';
import {FormsComponent} from './forms.component';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    FormsComponent
  ]
})
export class FormsModule {

}