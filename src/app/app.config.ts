// Fecha de edición: 2024-10-20, 14:00
// Editado: Configuración de la aplicación con enrutamiento y cliente HTTP
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),  // Provee las rutas definidas / Provides the routes defined
    provideAnimations(),    // Habilita las animaciones / Enables animations
    provideHttpClient(),     // Habilita el cliente HTTP / Enables the HTTP client
    provideClientHydration() // Habilita la rehidratación del cliente / Enables client hydration
  ]
};
