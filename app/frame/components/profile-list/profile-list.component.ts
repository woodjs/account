import {Component, Inject} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'profile-list',
  templateUrl: './profile-list.html'
})
export class ProfileListComponent {

  isShowProfileList: boolean = false;

  constructor(
    @Inject('appEvent') private _appEvent
  ) {
    this._appEvent.subscribe('profile-list:show', (state: boolean) => {
      this.isShowProfileList = state;
    });
  }
}