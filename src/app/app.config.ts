import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Promenjen import



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
