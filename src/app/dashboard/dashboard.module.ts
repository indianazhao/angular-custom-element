import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
/* import { createCustomElement } from '@angular/elements';
import { DashboardTileComponent } from './dashboard-tile/dashboard-tile.component'; */

@NgModule({
  declarations: [/* DashboardTileComponent */],
  imports: [
    CommonModule
  ],
  entryComponents: [
    /* DashboardTileComponent */
  ],
})
export class DashboardModule {

  /* constructor(private injector: Injector) {
    const tileCE = createCustomElement(DashboardTileComponent, { injector: this.injector });
    customElements.define('dashboard-tile', tileCE);
  } */
}
