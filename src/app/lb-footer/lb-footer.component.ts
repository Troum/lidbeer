import {Component, OnInit} from '@angular/core';
// @ts-ignore
import social from '../../assets/social.json';

@Component({
  selector: 'app-lb-footer',
  templateUrl: './lb-footer.component.html',
  styleUrls: ['./lb-footer.component.scss']
})
export class LbFooterComponent implements OnInit {

  public social = {
    license: '<small>ААТ «ЛIДСКАЕ ПIВА», УНП 500022116, Г. ЛIДА, ВУЛ. МIЦКЕВIЧА, 32, ТЭЛ.: (0154) 53 53 00.<br>' +
        '        ГАСТРОЛЬНАЕ ПАСВЕДЧАННЕ № 392 АД 26.04.2019 Г., ВЫДАДЗЕНА УПРАЎЛЕННЕМ КУЛЬТУРЫ ГРОДЗЕНСКАГА АБЛАСНОГА ВЫКАНАЎЧАГА КАМIТЭТА</small>',
    social: social.social
  };

  constructor() { }

  ngOnInit() {
  }

}
