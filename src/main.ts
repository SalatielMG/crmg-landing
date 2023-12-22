import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { loadEnvironment } from './app/core/environment/environment.loader';
import { ENVIRONMENT } from './app/core/environment/environment.token';

if (environment.production) {
  enableProdMode();
}

loadEnvironment()
.then(env => {
    platformBrowserDynamic([
        {
            provide: ENVIRONMENT,
            useValue: env
        }
    ]).bootstrapModule(AppModule)
    .catch(err => console.error(err));
});