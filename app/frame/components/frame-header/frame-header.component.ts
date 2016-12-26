import {Component, Input} from '@angular/core';

import {AppEventService, LayoutStateService} from '../../../app.service';
import {APP_LAYOUT_MODE} from '../../../app.constant';

@Component({
  moduleId: module.id,
  selector: 'frame-header',
  templateUrl: './frame-header.html'
})
export class FrameHeaderComponent {
  isChecked: boolean = false;  // 控制页面布局模式
  isShowProfileList: boolean = false;
  controlObj = {
    isShowSearch: false,
    isShowMessage: false,
    isShowNotification: false,
    isShowProgress: false,
    isShowOperation: false
  };

  constructor(private _appEvent: AppEventService,
              private _layoutState: LayoutStateService) {
    this.isChecked = _layoutState.layoutMode === APP_LAYOUT_MODE.wideHasNav;
  }

  ngOnInit() {
  }

  toggleLayoutMode() {
    let layoutMode = this.isChecked === true ? APP_LAYOUT_MODE.thinNoNav : APP_LAYOUT_MODE.wideHasNav;
    this._appEvent.notifyDataChanged('app.layout', layoutMode);

    this.isChecked = !this.isChecked;
  }

  toggleProfileList() {
    let nextState = !this.isShowProfileList;

    this._appEvent.notifyDataChanged('profile-list:show', nextState);
    this.isShowProfileList = nextState;
  }

  toggleComponent(code: string) {
    for (var key in this.controlObj) {
      if (this.controlObj.hasOwnProperty(key)) {
        this.controlObj[key] = key === code;
      }
    }
  }
}