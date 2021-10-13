import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './app-header.component';

@NgModule({
  declarations: [
    AppHeaderComponent
  ],
  exports: [
    AppHeaderComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatMenuModule,
    MatToolbarModule
  ]
})
export class AppHeaderModule { }
