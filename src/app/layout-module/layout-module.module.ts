import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutNodeColComponent } from './layout-node-col/layout-node-col.component';
import { LayoutNodeGridComponent } from './layout-node-grid/layout-node-grid.component';
import { LayoutNodeRowComponent } from './layout-node-row/layout-node-row.component';
import { LayoutPipeModuleModule } from './layout-pipe-module/layout-pipe-module.module';



@NgModule({
  declarations: [
    LayoutNodeGridComponent,
    LayoutNodeRowComponent,
    LayoutNodeColComponent,
  ],
  exports: [
    LayoutNodeGridComponent,
    LayoutNodeRowComponent,
    LayoutNodeColComponent
  ],
  imports: [
    CommonModule,
    LayoutPipeModuleModule
  ]
})
export class LayoutModuleModule { }
