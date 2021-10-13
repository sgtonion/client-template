import {
  AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, QueryList,
  ViewChildren, ViewContainerRef
} from '@angular/core';
import { ColNode } from 'src/utils/layout-models/col-node';
import { GridNode } from 'src/utils/layout-models/grid-node';
import { RowNode } from 'src/utils/layout-models/row-node';
import { LayoutNodeDefaultComponent } from '../layout-node-default/layout-node-default.component';

@Component({
  selector: 'app-layout-node-grid',
  templateUrl: 'layout-node-grid.component.html',
  styleUrls: ['./layout-node-grid.component.scss'],
})
export class LayoutNodeGridComponent implements OnInit, AfterViewInit {
  @Input() layoutNode: GridNode = new GridNode([
    new RowNode([ new ColNode(LayoutNodeDefaultComponent, null) ])
  ]);
  @Input() data: any;
  @ViewChildren('viewContainerRef', { read: ViewContainerRef }) viewContainerRef: QueryList<ViewContainerRef>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    this.layoutNode.getRows().flatMap(node => node.getColumns()).forEach((node, index) => {
      const viewContainerRef = this.viewContainerRef.get(index);
      const component = node.getComponent();
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      const containerRef = viewContainerRef.createComponent(componentFactory);
      (containerRef.instance as LayoutNodeGridComponent).layoutNode = node.getNode();
      (containerRef.instance as LayoutNodeGridComponent).data = node.getData();
    });
  }

}
