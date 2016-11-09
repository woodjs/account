import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'login',
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

  constructor() {
  }

  ngOnInit() {
  }

  login(): void {
    let isValid = this.checkValid();

    if (isValid) {
      console.log('ok');
    }
  }

  getParams(): Object {
    return {
      username: this.username,
      password: this.password
    }
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