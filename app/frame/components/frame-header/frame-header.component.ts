import {Component} from '@angular/core';

import {AppStateService} from '../../../app-state.service';
@Component({
  moduleId: module.id,
  selector: 'frame-header',
  templateUrl: './frame-header.html'
})
export class FrameHeaderComponent {
  private _isNavShow: boolean = true;

  constructor(
    private _appState: AppStateService
  ) {
    this._appState.subscribe('nav.show', (isNavShow) => {
      this._isNavShow = isNavShow;
    });
  }

  toggleNavShow() {
    this._isNavShow = !this._isNavShow;
    this._appState.notifyDataChanged('nav.show', this._isNavShow);
  }
}