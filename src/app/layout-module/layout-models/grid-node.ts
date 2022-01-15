import { QueryList, ViewContainerRef } from '@angular/core';
import { INode, IPayload } from './interfaces';
import { RowNode } from './row-node';

export class GridNode implements INode<RowNode[]>, IPayload {

    constructor(
        protected children?: RowNode[],
        protected data?: any
    ) {
        this.children = (children || children?.length < 1) ?
            children :
            [new RowNode()];
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

    renderGrid(viewContainerRefs: QueryList<ViewContainerRef>): void {
        const gridCols = this.getRows().flatMap(rowNode => rowNode.getColumns());

        if (viewContainerRefs.length !== gridCols.length) {
            throw new Error('Rendering Grid failed: viewContainerRefs does not meet total number of columns');
        }

        gridCols
            .forEach((node, index) => {
                const viewContainerRef = viewContainerRefs.get(index);
                node.createComponentInside(viewContainerRef);
            });
    }
}
