import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { catagoryEffects, catagoryFeature } from '@e-commerence-using-nx-ngrx/catagory';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
   provideRouter(appRoutes, withEnabledBlockingInitialNavigation(),withComponentInputBinding()),
   provideAnimations(),
   provideHttpClient(),
   provideStore(),
   provideState(catagoryFeature),
   provideEffects([catagoryEffects]),
   provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ],
};
