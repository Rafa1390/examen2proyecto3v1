import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { Examen2Proyecto3V1AppModule } from './app.module';

ProdConfig();

if (module['hot']) {
  module['hot'].accept();
}

platformBrowserDynamic()
  .bootstrapModule(Examen2Proyecto3V1AppModule, { preserveWhitespaces: true })
  // eslint-disable-next-line no-console
  .then(success => console.log('Application started'))
  .catch(err => console.error(err));
