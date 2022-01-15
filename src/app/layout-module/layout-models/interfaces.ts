import { ComponentRef, Type, ViewContainerRef } from '@angular/core';

export interface IPayload {
    getData(): any;
}

export interface INodeComponent<T> {
    getComponent(): Type<T>;
    createComponentInside(viewContainerRef: ViewContainerRef): ComponentRef<T>;
}

export interface INode<T> {
    getChildren(): T;
    isLeaf(): boolean;
}
