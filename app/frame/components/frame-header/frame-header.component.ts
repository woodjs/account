import {Component, Input} from '@angular/core';

import {AppEventService, LayoutStateService} from '../../../app.service';
import {APP_LAYOUT_MODE} from '../../../app.constant';

@Component({
  moduleId: module.id,
  selector: 'frame-header',
  templateUrl: './frame-header.html'
})
export class FrameHeaderComponent {
  private _checked: boolean = false;  // 控制页面布局模式
  private _showSearch: boolean = false;

  constructor(
    private _appEvent: AppEventService,
    private _layoutState: LayoutStateService
  ) {
    this._checked = _layoutState.layoutMode === APP_LAYOUT_MODE.wideHasNav;
  }

  ngOnInit() {
  }

  toggleLayoutMode() {
    let layoutMode = this._checked === true ? APP_LAYOUT_MODE.thinNoNav : APP_LAYOUT_MODE.wideHasNav;
    this._appEvent.notifyDataChanged('app.layout', layoutMode);

    this._checked = !this._checked;
  }

  toggleSearch() {
    this._showSearch = !this._showSearch;
  }
}