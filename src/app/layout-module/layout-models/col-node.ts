import { Type, ViewContainerRef } from '@angular/core';
import { LayoutNodeBaseWidgetComponent } from '../layout-node-base-widget/layout-node-base-widget.component';
import { LayoutNodeGridComponent } from '../layout-node-grid/layout-node-grid.component';
import { GridNode } from './grid-node';
import { INode, INodeComponent, IPayload } from './interfaces';

export abstract class ColNode<T> implements INodeComponent<T>, INode<GridNode>, IPayload {
    constructor(
        protected component: Type<T>,
        protected node: GridNode,
        protected data?: any
    ) { }

    getChildren(): GridNode {
        return this.getNode();
    }

    isLeaf(): boolean {
        return this.getNode() == null;
    }

    getComponent(): Type<T> {
        return this.component;
    }

    getData() {
        return this.data;
    }

    getNode(): GridNode {
        return this.node;
    }

    createComponentInside(viewContainerRef: ViewContainerRef) {
        const component = this.getComponent();
        const componentRef = viewContainerRef.createComponent<T>(component);
        return componentRef;
    }
}

export class ColTypeGridNode extends ColNode<LayoutNodeGridComponent> {
    constructor(gridNode: GridNode, data: any){
        super(LayoutNodeGridComponent, gridNode, data);
    }

    createComponentInside(viewContainerRef: ViewContainerRef) {
        const componentRef = super.createComponentInside(viewContainerRef);
        componentRef.instance.layoutNode = this.getNode();
        componentRef.instance.data = this.getData();
        return componentRef;
    }
}

export class ColTypeWidgetNode extends ColNode<LayoutNodeBaseWidgetComponent> {
    constructor(widget: {
        component: Type<LayoutNodeBaseWidgetComponent>;
        data?: any;
    }) {
        const {
            component,
            data
        } = widget;
        super(component, null, data);
    }
}
