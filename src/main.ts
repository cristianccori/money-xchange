import { AppModule } from './app/app.module';
import { enableProdMode, LOCALE_ID } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([{provide: LOCALE_ID, useValue: 'en-US'}]).bootstrapModule(AppModule)
  .catch(err => console.log(err));
