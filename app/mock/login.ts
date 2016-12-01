import {InMemoryDbService} from 'angular-in-memory-web-api';

export class LoginMock implements  InMemoryDbService {
  createDb() {
    let users = [
      {id: 0, name: 'bugong', password: '111111'},
      {id: 1, name: 'yyl', password: '222222'}
    ];

    return {users};
  }
}