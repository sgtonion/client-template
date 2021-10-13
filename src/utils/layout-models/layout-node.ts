import { Type } from '@angular/core';
import { LayoutNodeColComponent } from 'src/app/layout-module/layout-node-col/layout-node-col.component';
import { LayoutNodeRowComponent } from 'src/app/layout-module/layout-node-row/layout-node-row.component';

export abstract class LayoutNode {

    constructor(
        protected component: Type<any>,
        protected children?: LayoutNode[],
        protected data?: any
    ){
        this.children = children ? children : [];
    }

    getComponent() {
        return this.component;
    }

    getData() {
        return this.data;
    }

    getChildren() {
        return this.children;
    }

    isLeaf() {
        return this.children.length <= 0;
    }

}

export class ColNode extends LayoutNode {

    constructor(
        component: Type<any>,
        protected node: GridNode,
        data?: any
    ){
        super(component, null, data);
    }

    getNode(): GridNode {
        return this.node;
    }
}

export class RowNode extends LayoutNode {

    constructor(
        children?: ColNode[],
        data?: any
    ){
        const resolvedChildren = (children || children?.length < 1) ? children :  [new ColNode(LayoutNodeColComponent, null)];
        super(LayoutNodeRowComponent, resolvedChildren, data);
    }

    getColumns(): ColNode[] {
        return this.getChildren() as ColNode[];
    }

}

export class GridNode extends LayoutNode {

    constructor(
        children?: RowNode[],
        data?: any
    ) {
        const resolvedChildren = (children || children?.length < 1) ? children :  [new RowNode(null)];
        super(LayoutNodeRowComponent, resolvedChildren, data);
    }

    getRows(): RowNode[] {
        return this.getChildren() as RowNode[];
    }
}
