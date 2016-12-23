import {Component} from '@angular/core';

import {AppStateService} from '../../../app.service';
import {APP_LAYOUT_MODE} from '../../../app.constant';

@Component({
  moduleId: module.id,
  selector: 'frame-header',
  templateUrl: './frame-header.html'
})
export class FrameHeaderComponent {
  private _layoutMode: string = APP_LAYOUT_MODE.wideHasNav;

  constructor(
    private _appState: AppStateService
  ) {
  }

  toggleLayoutMode() {
    this._appState.notifyDataChanged('app.layout', this._layoutMode);
  }
}