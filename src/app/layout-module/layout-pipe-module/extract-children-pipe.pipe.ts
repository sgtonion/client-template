import { Pipe, PipeTransform } from '@angular/core';
import { INode } from 'src/app/layout-module/layout-models/interfaces';

@Pipe({
  name: 'extractChildren',
  pure: true
})
export class ExtractChildrenPipePipe implements PipeTransform {

  transform<T>(node: INode<T>): T {
    return node.getChildren();
  }

}
