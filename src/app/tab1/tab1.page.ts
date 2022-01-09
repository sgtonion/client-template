import { Component } from '@angular/core';
import { ColNode } from 'src/app/layout-module/layout-models/col-node';
import { GridNode } from 'src/app/layout-module/layout-models/grid-node';
import { RowNode } from 'src/app/layout-module/layout-models/row-node';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { LayoutNodeDefaultComponent } from '../layout-module/layout-node-default/layout-node-default.component';
import { LayoutNodeGridComponent } from '../layout-module/layout-node-grid/layout-node-grid.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  layout = new GridNode([
    // eslint-disable-next-line max-len
    new RowNode([ new ColNode(AppHeaderComponent, null)]),
    new RowNode([ new ColNode(LayoutNodeGridComponent,
      new GridNode([
        // eslint-disable-next-line max-len
        new RowNode([new ColNode(LayoutNodeDefaultComponent, null), new ColNode(LayoutNodeDefaultComponent, null), new ColNode(LayoutNodeDefaultComponent, null)]),
        // eslint-disable-next-line max-len
        new RowNode([new ColNode(LayoutNodeDefaultComponent, null), new ColNode(LayoutNodeDefaultComponent, null), new ColNode(LayoutNodeDefaultComponent, null)]),
      ])) ]),
    new RowNode([ new ColNode(LayoutNodeDefaultComponent, null), new ColNode(LayoutNodeDefaultComponent, null) ]),
  ]);

  constructor() {}

}
