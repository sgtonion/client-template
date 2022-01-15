import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppHeaderModule } from '../app-header/app-header.module';
import { LayoutNodeBaseWidgetComponent } from './layout-node-base-widget/layout-node-base-widget.component';
import { LayoutNodeGridComponent } from './layout-node-grid/layout-node-grid.component';
import { LayoutPipeModule } from './layout-pipe-module/layout-pipe.module';

@NgModule({
  declarations: [
    LayoutNodeGridComponent,
    LayoutNodeBaseWidgetComponent
  ],
  exports: [
    LayoutNodeGridComponent,
    LayoutNodeBaseWidgetComponent
  ],
  imports: [
    CommonModule,
    LayoutPipeModule,
    AppHeaderModule
  ]
})
export class LayoutModule { }
