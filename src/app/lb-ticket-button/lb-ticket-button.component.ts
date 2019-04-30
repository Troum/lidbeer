import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lb-ticket-button',
  templateUrl: './lb-ticket-button.component.html',
  styleUrls: ['./lb-ticket-button.component.scss']
})
export class LbTicketButtonComponent implements OnInit {

  @Input() text: string;
  @Input() type: string;
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
