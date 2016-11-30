import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: '../template/forget-password.html'
})
export class ForgetPasswordComponent{

  constructor(
    private router: Router
  ) {
  }

  toLogin() {
    let link = ['/login'];

    this.router.navigate(link);
  }

  toRegister() {
    let link = ['/register'];

    this.router.navigate(link);
  }
}