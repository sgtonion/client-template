import { LayoutNodeBaseWidgetComponent } from '../layout-node-base-widget/layout-node-base-widget.component';
import { ColNode, ColTypeWidgetNode } from './col-node';
import { INode, IPayload } from './interfaces';
import { LayoutColTypeNodeComponents } from './type-aliases';

export class RowNode implements INode<ColNode<LayoutColTypeNodeComponents>[]>, IPayload {

    constructor(
        protected children?: ColNode<LayoutColTypeNodeComponents>[],
        protected data?: any
    ) {
        this.children = (children || children?.length < 1) ?
        children :
        [new ColTypeWidgetNode({component: LayoutNodeBaseWidgetComponent, data: null})];
    }

    getChildren(): ColNode<LayoutColTypeNodeComponents>[] {
        return this.children;
    }

    isLeaf(): boolean {
        return this.getChildren().length === 0;
    }

    getData() {
        return this.data;
    }

    getColumns(): ColNode<LayoutColTypeNodeComponents>[] {
        return this.getChildren();
    }

}
