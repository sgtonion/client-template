import {
  AfterViewInit, Component, Input, OnInit, QueryList,
  ViewChildren, ViewContainerRef
} from '@angular/core';
import { ColTypeWidgetNode } from 'src/app/layout-module/layout-models/col-node';
import { GridNode } from 'src/app/layout-module/layout-models/grid-node';
import { RowNode } from 'src/app/layout-module/layout-models/row-node';
import { LayoutNodeBaseWidgetComponent } from '../layout-node-base-widget/layout-node-base-widget.component';

@Component({
  selector: 'app-layout-node-grid',
  templateUrl: 'layout-node-grid.component.html',
  styleUrls: ['./layout-node-grid.component.scss'],
})
export class LayoutNodeGridComponent implements OnInit, AfterViewInit {
  @Input() layoutNode: GridNode = new GridNode([
    new RowNode([new ColTypeWidgetNode({ component: LayoutNodeBaseWidgetComponent, data: null })])
  ]);
  @Input() data: any;
  @ViewChildren('viewContainerRef', { read: ViewContainerRef }) viewContainerRefQueryList: QueryList<ViewContainerRef>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.layoutNode.renderGrid(this.viewContainerRefQueryList);
  }
}
