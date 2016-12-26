import {Component} from '@angular/core';
import {AppEventService} from '../../../app.service';

@Component({
  moduleId: module.id,
  selector: 'profile-list',
  templateUrl: './profile-list.html'
})
export class ProfileListComponent {

  isShowProfileList: boolean = false;

  constructor(
    private _appEvent: AppEventService
  ) {
    this._appEvent.subscribe('profile-list:show', (state: boolean) => {
      this.isShowProfileList = state;
    });
  }
}