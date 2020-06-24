import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
/* import { AppComponent } from './app.component'; */
import { AlertModule } from 'ngx-bootstrap/alert';
import { DashboardModule } from './dashboard/dashboard.module';
import { createCustomElement } from '@angular/elements';
import { DashboardTileComponent } from './dashboard/dashboard-tile/dashboard-tile.component';

@NgModule({
  declarations: [
    /* AppComponent, */
    DashboardTileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [/* AppComponent */],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    DashboardTileComponent
  ],
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const externalTileCE = createCustomElement(DashboardTileComponent, { injector: this.injector });
    customElements.define('external-dashboard-tile', externalTileCE);
  }
}
