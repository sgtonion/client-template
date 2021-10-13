import { LayoutNodeDefaultComponent } from 'src/app/layout-module/layout-node-default/layout-node-default.component';
import { ColNode } from './col-node';
import { INode, IPayload } from './interfaces';

export class RowNode implements INode<ColNode[]>, IPayload {

    constructor(
        protected children?: ColNode[],
        protected data?: any
    ) {
        this.children = (children || children?.length < 1) ? children : [new ColNode(LayoutNodeDefaultComponent, null)];
    }

    getChildren(): ColNode[] {
        return this.children;
    }

    isLeaf(): boolean {
        return this.getChildren().length === 0;
    }

    getData() {
        return this.data;
    }

    getColumns(): ColNode[] {
        return this.getChildren();
    }

}
