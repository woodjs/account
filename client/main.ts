import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './module/app';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
