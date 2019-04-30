import { Component, OnInit } from '@angular/core';
import feedback from '../../../assets/feedback.json';

@Component({
  selector: 'app-lb-contacts',
  templateUrl: './lb-contacts.component.html',
  styleUrls: ['./lb-contacts.component.scss']
})
export class LbContactsComponent implements OnInit {
  public info = {
    title: 'ЁСЦЬ ПЫТАННЕ ЦI ПРАПАНОВА?',
    subtitle: 'Адпраўце нам паведамленне!',
    dropdown: {
      button: 'Пазначце тэму',
      feedback: feedback.feedback
    },
    router: null
  };

  constructor() { }

  ngOnInit() {
  }

  chooseLink(link: string, title: string) {
    this.info.router = link;
    this.info.dropdown.button = title;
  }

}
