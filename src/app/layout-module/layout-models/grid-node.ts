import { INode, IPayload } from './interfaces';
import { RowNode } from './row-node';

export class GridNode implements INode<RowNode[]>, IPayload {

    constructor(
        protected children?: RowNode[],
        protected data?: any
    ) {
        this.children = (children || children?.length < 1) ? children : [new RowNode()];
    }

    getData() {
        return this.data;
    }

    getChildren(): RowNode[] {
        return this.children;
    }

    isLeaf(): boolean {
        return this.getChildren().length === 0;
    }

    getRows(): RowNode[] {
        return this.getChildren();
    }
}
