import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ResultsModule } from './views/results/results.module';
import { ProductModule } from './views/product/product.module';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(es, 'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedModule,
    ResultsModule,
    ProductModule
  ],
  providers: [
    /*{
    provide: LOCALE_ID,
    useValue: 'es-AR',
  }*/
],
  bootstrap: [AppComponent]
})
export class AppModule { }
