import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  showMenu: string    = '';
  elementId: string   = '';

  constructor() { }

  ngOnInit() {
  }

  addExpandClass(element: any) {
    this.elementId = '#'.concat(element);
    if (element === this.showMenu) {
      this.showMenu = '0';
      $(this.elementId).slideUp(350);
    } else {
        this.showMenu = element;
        $(this.elementId).slideToggle(350);
    }
  }

}
