import { Component } from '@angular/core';
import { LayoutNodeBaseWidgetComponent } from 'src/app/layout-module/layout-node-base-widget/layout-node-base-widget.component';

@Component({
  selector: 'app-applet-core-sidenav',
  templateUrl: './applet-core-sidenav.component.html',
  styleUrls: ['./applet-core-sidenav.component.css']
})
export class AppletCoreSidenavComponent extends LayoutNodeBaseWidgetComponent {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
