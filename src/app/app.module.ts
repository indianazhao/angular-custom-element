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

    /** 透過使用 http-server 執行網站（透過一般 Vanilla JS 的方式使用 custom element），會出現以下錯誤：「ERROR DOMException: Failed to execute
     *  'define' on 'CustomElementRegistry': the name "external-dashboard-tile" has already been used with this registry」
     *  必須改成以下作法，避免重複定義 external-dashboard-tile。
     */
    // customElements.define('external-dashboard-tile', externalTileCE);
    if (!customElements.get('external-dashboard-tile')) {
      customElements.define('external-dashboard-tile', externalTileCE);
    }
  }
}
