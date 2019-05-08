import {Component, HostListener, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PluralizePipe} from '../../../_pipes/pluralize.pipe';
import {HttpService} from '../../../_services/http-service/http.service';
import {Response} from '../../../_interfaces/response';
import { Error } from '../../../_interfaces/error';

@Component({
  selector: 'app-lb-feedback-partner',
  templateUrl: './lb-feedback-partner.component.html',
  styleUrls: ['./lb-feedback-partner.component.scss'],
  providers: [PluralizePipe]
})
export class LbFeedbackPartnerComponent implements OnInit {
  public info = {
    title: 'Партнёрства',
    subtitle: 'Адпраўце нам паведамленне!',
    labels: {
      name: 'Назва кампаніі',
      documents: 'Прэзентацыйныя матэрыялы (фотаздымкі і дакументы)',
      contacts: 'Кантакты (уводзьце праз прабел)'
    },
    errors: {
      name: 'Назва кампаніі абавязкова!',
      documents: 'Прэзентацыйныя матэрыялы абавязковы!',
      contacts: 'Кантактная інфармацыя абавязкова!'
    },
    pluralize: '',
    submitted: false,
    success: false,
    error: false
  };
  public documents: Array<any> = [];
  public form: FormGroup;
  public response: Response;
  public error: Error;

  @HostListener('document:click', ['$event']) documentClick(event: MouseEvent) {
    this.info.submitted = false;
  }

  constructor(private fb: FormBuilder, private pluralize: PluralizePipe, private httpService: HttpService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      documents: ['', Validators.required],
      contacts: ['', Validators.required]
    });
  }

  get partner() {
    return this.form.controls;
  }

  toPluralize(event) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.documents.push(event.target.files[i]);
    }
    this.info.pluralize = `<span class="badge badge-warning">${this.pluralize.transform(event.target.files)}</span>`;
  }

  submit() {
    const partners: FormData = new FormData();
    this.info.submitted = true;
    if (!this.form.valid) {
      return true;
    }
    this.documents.forEach((file) => {
      partners.append('documents[]', <File>file);
    });
    partners.append('name', this.partner.name.value);
    partners.append('contacts', this.partner.contacts.value);
    this.httpService.feedbackPartner(partners).subscribe(
      (data: Response) => {
        this.response = {...data};
        this.info.submitted = false;
        this.info.success = true;
        setTimeout(() => {
          this.info.success = false;
        }, 5000);
        this.form.reset();
        this.info.pluralize = '';
        this.documents = [];
      },
      (error: Error) => {
        this.error = {...error};
        this.info.error = this.error.error.error;
        setTimeout(() => {
          this.info.error = false;
        }, 5000);
      }
    );
  }
}
