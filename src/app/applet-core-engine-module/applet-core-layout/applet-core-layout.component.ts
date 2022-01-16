import { Component, OnInit } from '@angular/core';
import { ColTypeGridNode, ColTypeWidgetNode } from 'src/app/layout-module/layout-models/col-node';
import { GridNode } from 'src/app/layout-module/layout-models/grid-node';
import { RowNode } from 'src/app/layout-module/layout-models/row-node';
import { AppletCoreSidenavComponent } from '../applet-core-sidenav/applet-core-sidenav.component';

@Component({
  selector: 'app-applet-core-layout',
  templateUrl: './applet-core-layout.component.html',
  styleUrls: ['./applet-core-layout.component.css']
})
export class AppletCoreLayoutComponent implements OnInit {
  
  layout = new GridNode([
    new RowNode([
      new ColTypeWidgetNode({ component: AppletCoreSidenavComponent, data: null}),
      new ColTypeGridNode( new GridNode(), null)
    ])
  ]);

  constructor() { }

  ngOnInit(): void {
  }

}
