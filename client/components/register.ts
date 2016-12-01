import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: '../templates/register.html'
})
export class RegisterComponent{

  constructor(
    private router: Router
  ) {
  }

  toLogin() {
    let link = ['/login'];

    this.router.navigate(link);
  }

  toForgetPassword() {
    let link = ['/forget-password'];

    this.router.navigate(link);
  }
}