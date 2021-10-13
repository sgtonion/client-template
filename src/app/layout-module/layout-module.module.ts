import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppHeaderModule } from '../app-header/app-header.module';
import { LayoutNodeDefaultComponent } from './layout-node-default/layout-node-default.component';
import { LayoutNodeGridComponent } from './layout-node-grid/layout-node-grid.component';
import { LayoutPipeModuleModule } from './layout-pipe-module/layout-pipe-module.module';

@NgModule({
  declarations: [
    LayoutNodeGridComponent,
    LayoutNodeDefaultComponent,
  ],
  exports: [
    LayoutNodeGridComponent,
    LayoutNodeDefaultComponent
  ],
  imports: [
    CommonModule,
    LayoutPipeModuleModule,
    AppHeaderModule
  ]
})
export class LayoutModuleModule { }
