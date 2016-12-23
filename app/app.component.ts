import {Component} from '@angular/core';

import {AppStateService} from './app.service';
import {APP_LAYOUT_MODE} from './app.constant';

@Component({
  moduleId: module.id,
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  layoutClass: string = '';

  constructor(
    private _appState: AppStateService
  ) {
    this._appState.subscribe('app.layout', (layoutMode) => {

      this.setLayoutClass(layoutMode);
      localStorage.setItem('app-layout-mode', layoutMode);
    });
  }

  ngOnInit() {
    let layoutMode = localStorage.getItem('app-layout-mode') || APP_LAYOUT_MODE.wideHasNav;

    this.setLayoutClass(layoutMode);
  }

  setLayoutClass(layoutMode) {
    this.layoutClass = layoutMode === APP_LAYOUT_MODE.wideHasNav ? 'toggled sw-toggled' : '';
  }
}