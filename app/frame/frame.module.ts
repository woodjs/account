import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FramePicturePipe} from './pipes/frame-picture.pipe';
import {ProfilePicturePipe} from './pipes/profile-picture.pipe';

import {FrameHeaderComponent} from './components/frame-header/frame-header.component';
import {FrameFooterComponent} from './components/frame-footer/frame-footer.component';
import {FrameNavComponent} from './components/frame-nav/frame-nav.component';
import {ProfileListComponent} from './components/profile-list/profile-list.component';
import {PageLoaderComponent} from './components/page-loader/page-loader.component';

const FRAME_PIPES = [
  FramePicturePipe,
  ProfilePicturePipe
];

const FRAME_COMPONENTS = [
  FrameHeaderComponent,
  FrameFooterComponent,
  FrameNavComponent,
  ProfileListComponent,
  PageLoaderComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...FRAME_PIPES,
    ...FRAME_COMPONENTS
  ],
  exports: [
    ...FRAME_PIPES,
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