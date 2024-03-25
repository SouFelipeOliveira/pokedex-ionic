import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import {
  DefaultHeaderComponent,
  DefaultLayoutComponent,
  DefaultFooterComponent
} from './containers';

const CONTAINERS = [
  DefaultHeaderComponent,
  DefaultLayoutComponent,
  DefaultFooterComponent
];

@NgModule({
  declarations: [AppComponent, ...CONTAINERS],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
