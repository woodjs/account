import {NgModule, ModuleWithProviders} from '@angular/core';

import {FrameHeaderComponent} from "./components/frame-header/frame-header.component";
import {FrameFooterComponent} from "./components/frame-footer/frame-footer.component";
import {FrameNavComponent} from "./components/frame-nav/frame-nav.component";
import {ProfileListComponent} from "./components/profile-list/profile-list.component";

const FRAME_COMPONENTS = [
  FrameHeaderComponent,
  FrameFooterComponent,
  FrameNavComponent,
  ProfileListComponent
];

@NgModule({
  imports: [],
  declarations: [
    ...FRAME_COMPONENTS
  ],
  exports: [
    ...FRAME_COMPONENTS
  ]
})
export class FrameModule {
  static forRoot () {
    return <ModuleWithProviders> {
      ngModule: FrameModule,
      providers: [
      ]
    };
  }
}