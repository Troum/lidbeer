import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lb-phone',
  templateUrl: './lb-phone.component.html',
  styleUrls: ['./lb-phone.component.scss']
})
export class LbPhoneComponent implements OnInit {

  public phone = '<p class="h6">Тэлефон гарачай лініі: <a href="tel:8-801-204-20-20" class="text-dark"><strong>8-801-204-20-20</strong></a><br><small>&nbsp;(з 8:00 да 20:00)</small>';

  constructor() { }

  ngOnInit() {
  }

}
