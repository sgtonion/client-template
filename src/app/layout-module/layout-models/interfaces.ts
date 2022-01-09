import { Type } from '@angular/core';

export interface IPayload {
    getData(): any;
}

export interface INodeComponent {
    getComponent(): Type<any>;
}

export interface INode<T> {
    getChildren(): T;
    isLeaf(): boolean;
}
