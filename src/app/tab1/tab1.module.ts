import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppHeaderModule } from '../app-header/app-header.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { LayoutModuleModule } from '../layout-module/layout-module.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Tab1Page } from './tab1.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    LayoutModuleModule,
    AppHeaderModule
  ],
  declarations: [
    Tab1Page
  ]
})
export class Tab1PageModule {}
