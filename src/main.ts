import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {CookieXSRFStrategy, XSRFStrategy} from '@angular/http';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(
  AppModule
  // [
  //   { provide: XSRFStrategy, useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')},
  // ]
);
