import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {App} from './module/app';

const platform = platformBrowserDynamic();

platform.bootstrapModule(App);
