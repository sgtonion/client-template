import { Component, OnInit } from '@angular/core';
import { Authorization, MENU, USER_MENU } from './data';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public Authorization = Authorization;
  menuList = MENU;
  userMenu = USER_MENU;

  constructor() { }

  ngOnInit() {}

  search(value){
    throw new Error('Method not Implemented');
  }

}
