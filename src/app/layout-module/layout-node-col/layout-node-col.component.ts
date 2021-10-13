import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-node-col',
  template:
            `
            <ion-col>
              <p>It works yay</p>
            </ion-col>
            `,
  styleUrls: ['./layout-node-col.component.scss'],
})
export class LayoutNodeColComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
