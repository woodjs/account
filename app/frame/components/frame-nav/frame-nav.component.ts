import {Component, ElementRef, AfterViewInit} from '@angular/core';

import {AppEventService} from '../../../app.service';

declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'frame-nav',
  templateUrl: './frame-nav.html'
})
export class FrameNavComponent implements AfterViewInit {
  isShowNav: boolean;
  activeItems: Object = {};

  constructor(
    private _eleRef: ElementRef,
    private _appEvent: AppEventService
  ) {
    this._appEvent.subscribe('nav:show', (state: boolean) => {
      this.isShowNav = state;
    })
  }

  ngAfterViewInit() {
    jQuery && jQuery('#frame-nav').mCustomScrollbar({
      theme: 'minimal-dark',
      scrollInertia: 100,
      axis:'yx',
      mouseWheel: {
        enable: true,
        axis: 'y',
        preventDefault: true
      }
    });
  }

  toggleSubMenu(code: string) {
    this.activeItems[code] = !this.activeItems[code];
  }
}