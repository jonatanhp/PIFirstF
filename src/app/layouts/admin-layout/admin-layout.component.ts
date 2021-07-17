import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../components/sidebar/sidebar.component';;

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  /*template: `
    
    <nb-layout >
    <nb-sidebar class="menu-sidebar" responsive>
    <nb-menu [items]="menu"></nb-menu>
    </nb-sidebar>
    <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
        <router-outlet></router-outlet>
      </nb-layout-column>
     
    </nb-layout>
    
    
  `,*/
})
export class AdminLayoutComponent implements OnInit {
  menu = ROUTES;

  constructor() { }

  ngOnInit() {
  }

}
