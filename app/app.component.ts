import {Component, HostBinding} from '@angular/core';

import {AppEventService, LayoutStateService} from './app.service';
import {APP_LAYOUT_MODE} from './app.constant';

@Component({
  moduleId: module.id,
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  @HostBinding('class.sw-toggled')
  isWideMode = true;

  constructor(
    private _appEvent: AppEventService,
    private _layoutState: LayoutStateService
  ) {
    this._appEvent.subscribe('app.layout', (layoutMode) => {

      this.setLayoutClass(layoutMode);
      localStorage.setItem('app-layout-mode', layoutMode);
    });
  }

  ngOnInit() {
    let layoutMode = localStorage.getItem('app-layout-mode') || APP_LAYOUT_MODE.wideHasNav;

    this._layoutState.layoutMode = layoutMode;
    this.setLayoutClass(layoutMode);
  }

  setLayoutClass(layoutMode) {
    this.isWideMode = layoutMode === APP_LAYOUT_MODE.wideHasNav ? true : false;
  }
}