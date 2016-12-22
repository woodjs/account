import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AppStateService {

  private _data = new Subject<Object>();
  private _dataStream$ = this._data.asObservable();
  private _subscribeMap: Map<string, Array<Function>> = new Map<string, Array<Function>>();

  constructor() {
    this._dataStream$.subscribe((data) => {this._onEvent(data)});
  }

  private _onEvent(data) {
    let subscribers = this._subscribeMap.get(data['event']) || [];

    subscribers.forEach((callback) => {
      callback.call(null, data['data']);
    });
  }

  subscribe(event: string, callback: Function) {
    let subscribers = this._subscribeMap.get(event) || [];

    subscribers = subscribers.push(callback);

    this._subscribeMap.set(event, subscribers);
  }

  notifyDataChanged(event, value) {
    let curValue = this._data[event];

    if (curValue !== value) {
      this._data[event] = value;
      this._data.next({
        event: event,
        data: this._data[event]
      });
    }
  }
}