import {Component, OnInit, Inject} from '@angular/core';

import {APP_LAYOUT_MODE} from '../../../app.constant';

@Component({
  moduleId: module.id,
  selector: 'frame-header',
  templateUrl: './frame-header.html'
})
export class FrameHeaderComponent implements OnInit{
  isChecked: boolean = false;  // 控制页面布局模式
  isShowSearch: boolean = false;
  isShowNav: boolean = false;
  isShowProfileList: boolean = false;

  constructor(
    @Inject('appEvent') private _appEvent,
    @Inject('layoutState') private _layoutState
  ) {
    this.isChecked = _layoutState.layoutMode === APP_LAYOUT_MODE.wideHasNav;
  }

  ngOnInit() {
    this._appEvent.notifyDataChanged('nav:show', this.isChecked);
  }

  toggleLayoutMode() {
    let layoutMode = this.isChecked === true ? APP_LAYOUT_MODE.thinNoNav : APP_LAYOUT_MODE.wideHasNav;
    this._appEvent.notifyDataChanged('app.layout', layoutMode);

    this.isChecked = !this.isChecked;
    this._appEvent.notifyDataChanged('nav:show', this.isChecked);
  }

  toggleSearch() {
    this.isShowSearch = !this.isShowSearch;
  }

  toggleNav() {
    let nextState = !this.isShowNav;

    this._appEvent.notifyDataChanged('nav:show', nextState);
    this.isShowNav = nextState;
  }

  toggleProfileList() {
    let nextState = !this.isShowProfileList;

    this._appEvent.notifyDataChanged('profile-list:show', nextState);
    this.isShowProfileList = nextState;
  }
}