import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from '../schema/hero.schema';
import {HeroService} from '../service/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: '../template/dashboard.component.html',
  styleUrls: ['../style/dashboard.component.css']
})

export class DashboardComponent implements OnInit{

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router) {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }

  ngOnInit() {
  }

  gotoDetail(hero: Hero): void{
    let link = ['/detail', hero.id];

    this.router.navigate(link);
  }
}