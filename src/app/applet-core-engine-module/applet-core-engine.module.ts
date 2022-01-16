import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout-module/layout.module';
import { AppletCoreLayoutComponent } from './applet-core-layout/applet-core-layout.component';
import { AppletCoreSidenavComponent } from './applet-core-sidenav/applet-core-sidenav.component';



@NgModule({
  declarations: [
    AppletCoreLayoutComponent,
    AppletCoreSidenavComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    AppletCoreLayoutComponent
  ]
})
export class AppletCoreEngineModule { }
