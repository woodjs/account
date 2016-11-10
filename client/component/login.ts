import {Component, OnInit, ViewChild} from '@angular/core';

import {LoginParamsSchema} from '../schema/login';
import {LoginService} from '../service/login';

@Component({
  moduleId: module.id,
  selector: 'login',
  providers: [
    LoginService
  ],
  templateUrl: '../template/login.html',
  styles: [
    `
      .error {border: 1px solid red;}
      input{outline:none;}
    `
  ]
})
export class Login implements OnInit{

  @ViewChild('usernameRef')
  usernameRef;

  @ViewChild('passwordRef')
  passwordRef;

  private username: string = '';
  private password: string = '';
  private error: string = '';
  private usernameInvalid: boolean = false;
  private passwordInvalid: boolean = false;

  constructor(
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
  }

  login(): void {
    let isValid = this.checkValid();

    if (isValid) {
      var params = this.getParams();

      this.loginService.login(params)
        .then(users => console.log(users));
    }
  }

  getParams(): LoginParamsSchema {

    return {
      username: this.username,
      password: this.password
    };
  }

  checkValid(): boolean {
    this.resetStatus();

    if (this.username === '') {
      this.error = '请输入用户名！';
      this.usernameInvalid = true;
      this.usernameRef.nativeElement.focus();
      return false;
    }

    if (this.password === '') {
      this.error = '请输入密码！';
      this.passwordInvalid = true;
      this.passwordRef.nativeElement.focus();
      return false;
    }

    this.resetStatus();
    return true;
  }

  resetStatus() {
    this.error = '';
    this.usernameInvalid = false;
    this.passwordInvalid = false;
  }
}