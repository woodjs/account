import {NgModule, ModuleWithProviders} from '@angular/core';

import {FrameHeaderComponent} from "./components/frame-header/frame-header.component";
import {FrameMainComponent} from "./components/frame-main/frame-main.component";
import {FrameFooterComponent} from "./components/frame-footer/frame-footer.component";

const FRAME_COMPONENTS = [
  FrameHeaderComponent,
  FrameMainComponent,
  FrameFooterComponent
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