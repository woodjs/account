import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: '../templates/login.html'
})
export class LoginComponent{

  constructor(
    private router: Router
  ) {
  }

  login() {
    alert('login');
  }

  toRegister() {
    let link = ['/register'];

    this.router.navigate(link);
  }

  toForgetPassword() {
    let link = ['/forget-password'];

    this.router.navigate(link);
  }
}