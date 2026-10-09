import { bootstrapApplication } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Arranque de una aplicación standalone: providers y rutas se configuran aquí,
// sin necesidad de un AppModule.
registerLocaleData(localeEsAr);

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'es-AR' }
  ]
}).catch((error) => console.error(error));
