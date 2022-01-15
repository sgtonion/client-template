import { Component } from '@angular/core';
import { ColTypeGridNode, ColTypeWidgetNode } from 'src/app/layout-module/layout-models/col-node';
import { GridNode } from 'src/app/layout-module/layout-models/grid-node';
import { RowNode } from 'src/app/layout-module/layout-models/row-node';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { LayoutNodeBaseWidgetComponent } from '../layout-module/layout-node-base-widget/layout-node-base-widget.component';
import { OneCloseComponent } from '../widgets/one-close/one-close.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  layout = new GridNode([
    new RowNode([new ColTypeWidgetNode({ component: AppHeaderComponent, data: null })]),
    new RowNode([
      new ColTypeGridNode(
        new GridNode([
          new RowNode([
            new ColTypeWidgetNode({ component: LayoutNodeBaseWidgetComponent, data: null }),
            new ColTypeWidgetNode({ component: LayoutNodeBaseWidgetComponent, data: null }),
            new ColTypeWidgetNode({ component: LayoutNodeBaseWidgetComponent, data: null })
          ]),
          new RowNode([
            new ColTypeWidgetNode({ component: LayoutNodeBaseWidgetComponent, data: null }),
            new ColTypeWidgetNode({ component: LayoutNodeBaseWidgetComponent, data: null }),
            new ColTypeWidgetNode({ component: LayoutNodeBaseWidgetComponent, data: null })
          ]),
        ]),
        null)
    ]),
    new RowNode([
      new ColTypeWidgetNode({ component: LayoutNodeBaseWidgetComponent, data: null }),
      new ColTypeWidgetNode({ component: OneCloseComponent, data: null })
    ]),
  ]);

  constructor() { }

}
