import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: '',
  template: '<div>{{title}}</div>',
  styles: [
  ]
})
export class IndexComponent {
  private title: string = '这里是主页面';
}
