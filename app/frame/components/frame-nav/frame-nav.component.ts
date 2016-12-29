import {Component, ElementRef, AfterViewInit, Inject} from '@angular/core';

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
    @Inject('appEvent') private _appEvent
  ) {
    this._appEvent.subscribe('nav:show', (state: boolean) => {
      this.isShowNav = state;
    })
  }

  ngAfterViewInit() {
    jQuery && jQuery('#sidebar').mCustomScrollbar({
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