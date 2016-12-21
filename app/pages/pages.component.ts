import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pages',
  template: `
   <frame-header></frame-header>
   <section id="main">
    <frame-nav></frame-nav>
    <profile-list></profile-list>
    <section id="content">
      <router-outlet></router-outlet>
    </section>
   </section>
   <frame-footer></frame-footer>
  `
})
export class PagesComponent {
}