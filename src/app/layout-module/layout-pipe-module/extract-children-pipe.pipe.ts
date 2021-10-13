import { Pipe, PipeTransform } from '@angular/core';
import { LayoutNode } from 'src/utils/layout-models/layout-node';

@Pipe({
  name: 'extractChildren',
  pure: true
})
export class ExtractChildrenPipePipe implements PipeTransform {

  transform(node: LayoutNode, ...args: unknown[]): LayoutNode[] {
    return node.getChildren();
  }

}
