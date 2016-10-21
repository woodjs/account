import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <a href="#">abc</a>
  `,
  styleUrls: ['../style/app.component.css']
})
export class AppComponent {
  title = 'Tours of heroes';
}