import {Component} from '@angular/core';

import {AppEventService} from '../../../app.service';

@Component({
  moduleId: module.id,
  selector: 'frame-nav',
  templateUrl: './frame-nav.html'
})
export class FrameNavComponent {
  isShowNav: boolean;

  constructor(
    private _appEvent: AppEventService
  ) {
    this._appEvent.subscribe('nav:show', (state: boolean) => {
      this.isShowNav = state;
    })
  }

}