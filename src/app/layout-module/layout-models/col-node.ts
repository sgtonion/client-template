import { Type } from '@angular/core';
import { GridNode } from './grid-node';
import { INode, INodeComponent, IPayload } from './interfaces';

export class ColNode implements INodeComponent, INode<GridNode>, IPayload {

    constructor(
        protected component: Type<any>,
        protected node: GridNode,
        protected data?: any
    ) { }

    getChildren(): GridNode {
        return this.getNode();
    }

    isLeaf(): boolean {
        return this.getNode() == null;
    }

    getComponent(): Type<any> {
        return this.component;
    }

    getData() {
        return this.data;
    }

    getNode(): GridNode {
        return this.node;
    }
}
