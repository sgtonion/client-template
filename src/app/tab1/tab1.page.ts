import { Component } from '@angular/core';
import { ColNode, GridNode, RowNode } from 'src/utils/layout-models/layout-node';
import { LayoutNodeColComponent } from '../layout-module/layout-node-col/layout-node-col.component';
import { LayoutNodeGridComponent } from '../layout-module/layout-node-grid/layout-node-grid.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  layout = new GridNode([
    // eslint-disable-next-line max-len
    new RowNode([ new ColNode(LayoutNodeColComponent, null), new ColNode(LayoutNodeColComponent, null), new ColNode(LayoutNodeColComponent, null) ]),
    new RowNode([ new ColNode(LayoutNodeGridComponent,
      new GridNode([
        // eslint-disable-next-line max-len
        new RowNode([new ColNode(LayoutNodeColComponent, null), new ColNode(LayoutNodeColComponent, null), new ColNode(LayoutNodeColComponent, null)]),
        // eslint-disable-next-line max-len
        new RowNode([new ColNode(LayoutNodeColComponent, null), new ColNode(LayoutNodeColComponent, null), new ColNode(LayoutNodeColComponent, null)]),
      ])) ]),
    new RowNode([ new ColNode(LayoutNodeColComponent, null), new ColNode(LayoutNodeColComponent, null) ]),
  ]);

  constructor() {}

}
