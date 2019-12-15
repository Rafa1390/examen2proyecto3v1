import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Examen2Proyecto3V1SharedModule } from 'app/shared/shared.module';
import { Examen2Proyecto3V1CoreModule } from 'app/core/core.module';
import { Examen2Proyecto3V1AppRoutingModule } from './app-routing.module';
import { Examen2Proyecto3V1HomeModule } from './home/home.module';
import { Examen2Proyecto3V1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Examen2Proyecto3V1SharedModule,
    Examen2Proyecto3V1CoreModule,
    Examen2Proyecto3V1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Examen2Proyecto3V1EntityModule,
    Examen2Proyecto3V1AppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class Examen2Proyecto3V1AppModule {}
