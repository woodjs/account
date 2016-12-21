import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  template: `
    <frame-header></frame-header>
    <frame-main>
      <router-outlet></router-outlet>   
    </frame-main>
    <frame-footer></frame-footer>
  `
})
export class PagesComponent {
}