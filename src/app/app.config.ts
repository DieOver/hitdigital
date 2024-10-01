import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HitServiceContractService } from './shared/services/hit/hit.service.contract';
import { HitServiceMock } from './shared/services/hit/hit.service.mock';
import { HitService } from './shared/services/hit/hit.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    {
      provide: HitServiceContractService,
      useClass: HitServiceMock
    }
  ]
};
