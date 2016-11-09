import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Login} from '../component/login';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    Login
  ],
  bootstrap: [
    Login
  ]
})
export class App {
}