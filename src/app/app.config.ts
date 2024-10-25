// src/app/app.config.ts
// This file configures routing for the Library project

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Import the routes we defined
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),   // Enable router with our routes
    provideAnimations(),
    provideHttpClient()
  ]
};
