import {Component, OnInit} from '@angular/core';
// @ts-ignore
import sidebar from '../../../assets/sidebar.json';

@Component({
  selector: 'app-lb-admin-sidenav',
  templateUrl: './lb-admin-sidenav.component.html',
  styleUrls: ['./lb-admin-sidenav.component.scss']
})
export class LbAdminSidenavComponent implements OnInit {
  public collapsed: boolean;
  public sidebar = sidebar;
  public chevron = 'fas fa-chevron-left';
  constructor() {}

  ngOnInit() {
    this.collapsed = false;
  }

  collapse() {
    this.collapsed = !this.collapsed;
    this.collapsed ? this.chevron = 'fas fa-chevron-right' : this.chevron = 'fas fa-chevron-left';
  }

}
