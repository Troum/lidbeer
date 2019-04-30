import { Component, OnInit } from '@angular/core';
import menu from '../../assets/menu.json';
import social from '../../assets/social.json';

@Component({
  selector: 'app-lb-navbar',
  templateUrl: './lb-navbar.component.html',
  styleUrls: ['./lb-navbar.component.scss']
})
export class LbNavbarComponent implements OnInit {

  public menu = {
    menu: menu.menu,
    social: social.social,
    collapse: false
  };

  public logo = '../../assets/img/logo.png';

  constructor() { }

  ngOnInit() {
    if (window.innerWidth <= 576) {
      this.logo = '../../assets/img/logo-mobile.png';
    }
  }

  collapse() {
    this.menu.collapse = !this.menu.collapse;
  }

}
