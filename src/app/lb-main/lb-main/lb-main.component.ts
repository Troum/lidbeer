import { Component, OnInit } from '@angular/core';
// @ts-ignore
import partners from '../../../assets/partners.json';

@Component({
  selector: 'app-lb-main',
  templateUrl: './lb-main.component.html',
  styleUrls: ['./lb-main.component.scss']
})
export class LbMainComponent implements OnInit {

  public partners = partners;
  public info = {
    imageBG: '../../../assets/img/lb-first-bg-image.jpg',
    secondBG: '../../../assets/img/lb-second-bg-image.jpg',
    headliners: '<p class="h1 font-weight-bold text-center text-white text-uppercase">&nbsp;&nbsp;&nbsp;чайф&nbsp;&nbsp;сплин</p>\n' +
        '<p class="h1 font-weight-bold text-center text-white text-uppercase">элджей</p>\n' +
        '<p class="h4 font-weight-bold text-center text-white text-uppercase">агонь&nbsp;&nbsp;&nbsp;&nbsp;akute</p>\n' +
        '<p class="h6 font-weight-bold text-center text-white text-uppercase">молчат дома&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yellow arc 6</p>',
    makesound: {
      title: 'Зробім гучна <br> разам!',
      description: 'LIDBEER – гэта ўнікальны інтэрактыўны опэн-эйр, ' +
          'які на адзін дзень ператварае гістарычны цэнтр сталіцы беларускага броварства Ліды ў маштабную фестывальную пляцоўку. ' +
          'На фэст традыцыйна прыязджаюць госці з усёй краіны і замежжа. ' +
          'У пяты – юбілейны – год LIDBEER зноў створыць атмасферу для якаснага адпачынку ў кампаніі старых добрых сяброў: велізарны фудкорт, мноства забаў, квэст і экскурсіі, вуліцу рамеснікаў і дзве музычныя сцэны. ' +
          'Кожны ўдзельнік фестывалю можа паўплываць на праграму LIDBEER і зрабіць свята лепшым для ўсіх, прагаласаваўшы на сайце!',
      disclaimer: '<p class="h5">УСЕ ЧАКАЮЦЬ LIDBEER-2019, А САЙТ LIDBEER.BY ЧАКАЕ АБНАЎЛЕННЯ</p>' +
          '<p>Паступова інфармацыя пра падачу заяў, галасаванне, праграму і карту фестывалю будзе з\'яўляцца на сайце. Заставайцеся з намі і сачыце за навінамі ў сацсетках!</p>'
    },
    freescene: {
      title: 'Уваход<br>на фестываль<br>вольны',
      description: 'Абмежаваны ўваход па квітках толькі на пляцоўку гала-канцэрта, дзе будзе арганізаваны выступ хэдлайнераў фэсту.'
    },
    organizators: 'арганiзатары',
    infopartners: 'iнфапартнёры',
    titles: {
      emblem: 'Лiдскi раённы выканаўчы камiтэт',
      logo: 'ААТ «Лiдскае пiва»'
    }
  };

  constructor() { }

  ngOnInit() {
    if (window.innerWidth <= 576) {
      this.mobile();
    }
  }

  mobile() {
    this.info.headliners = '<p class="h4 font-weight-bold text-left text-white text-uppercase">чайф</p>' +
        '<p class="h4 font-weight-bold text-left text-white text-uppercase">сплин</p>' +
        '<p class="h5 font-weight-bold text-left text-white text-uppercase">элджей</p>' +
        '<p class="h5 font-weight-bold text-left text-white text-uppercase">агонь</p>' +
        '<p class="h6 font-weight-bold text-left text-white text-uppercase">akute</p>' +
        '<p class="h6 font-weight-bold text-left text-white text-uppercase">молчат дома</p>' +
        '<p class="h6 font-weight-bold text-left text-white text-uppercase">yellow arc 6</p>';
    this.info.imageBG = '../../../assets/img/lb-first-bg-image-mobile.jpg';
    this.info.secondBG = '../../../assets/img/lb-second-bg-image-mobile.jpg';
  }

}
