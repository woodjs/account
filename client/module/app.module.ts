import '../config/rxjs-extensions';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {appRoute} from '../route/app.route';
import {AppComponent} from '../component/app.component';
import {DashboardComponent} from "../component/dashboard.component";
import {HeroSearchComponent} from '../component/hero-search.component';
import {HeroesComponent} from '../component/heroes.component';
import {HeroDetailComponent} from '../component/hero-detail.component';
import {HeroService} from '../service/hero.service';
import {HeroesInMemory} from '../mock/mock-heroes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(HeroesInMemory),
    appRoute
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
