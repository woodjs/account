import {Component, HostBinding, OnInit, Inject} from '@angular/core';

import {APP_LAYOUT_MODE} from './app.constant';

@Component({
  moduleId: module.id,
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{

  @HostBinding('class.sw-toggled')
  isWideMode = true;

  constructor(
    @Inject('appEvent') private _appEvent,
    @Inject('layoutState') private _layoutState
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