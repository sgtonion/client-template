import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExtractChildrenPipePipe } from './extract-children-pipe.pipe';



@NgModule({
  declarations: [
    ExtractChildrenPipePipe
  ],
  exports: [
    ExtractChildrenPipePipe
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutPipeModuleModule { }
