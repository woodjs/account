import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AppEventService {

  private _subject = new Subject<Object>();
  private _subject$ = this._subject.asObservable();
  private _subscribeMap: Map<string, Array<Function>> = new Map<string, Array<Function>>();

  constructor() {
    this._subject$.subscribe((data) => {this._onEvent(data)});
  }

  private _onEvent(data) {
    let subscribers = this._subscribeMap.get(data['event']) || [];

    subscribers.forEach((callback) => {
      callback.call(null, data['data']);
    });
  }

  subscribe(event: string, callback: Function) {
    let subscribers = this._subscribeMap.get(event) || [];

    subscribers.push(callback);

   }

  notifyDataChanged(event, value) {
    let prevValue = this._subject[event];

    if (prevValue !== value) {
      this._subject[event] = value;
      this._subject.next({
        event: event,
        data: this._subject[event]
      });
    }
  }
}

@Injectable()
export class LayoutStateService {
  layoutMode: string;
}