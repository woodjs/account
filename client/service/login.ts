import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {LoginSchema} from '../schema/login';

@Injectable()
export class LoginService {

  private loginUrl: string = 'app/users';
  private headers: any = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: Http
  ) {
  }

  login(params: LoginSchema): Promise<any> {

    return this.http
      .post(this.loginUrl, JSON.stringify(params), {
        headers: this.headers
      })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleLoginError);
  }

  handleLoginError() {

  }
}
