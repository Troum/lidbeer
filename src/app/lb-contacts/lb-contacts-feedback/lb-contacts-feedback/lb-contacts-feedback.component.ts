import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../_services/http-service/http.service';
import { Response } from '../../../_interfaces/response';

@Component({
  selector: 'app-lb-contacts-feedback',
  templateUrl: './lb-contacts-feedback.component.html',
  styleUrls: ['./lb-contacts-feedback.component.scss']
})
export class LbContactsFeedbackComponent implements OnInit {
  public form: FormGroup;
  public info = {
    title: 'Зваротная сувязь',
    subtitle: 'Адпраўце нам паведамленне!',
    labels: {
      name: 'Iмя i прозвiшча',
      email: 'Email',
      phone: 'Мабiльны тэлефон',
      message: 'Паведамленне'
    },
    errors: {
      name: 'Імя ш прозвішча абавязковы!',
      email: {
        required: 'Email з\'яўляецца абавязковым!',
        email: 'Email павінны быць валідным!'
      },
      phone: 'Тэлефон абавязковвы!',
      message: 'Паведамленне не павінна быць пустым!'
    },
    submitted: false,
    success: false,
    error: null
  };
  public response: Response;

  @HostListener('document:click', ['$event']) documentClick(event: MouseEvent) {
    this.info.submitted = false;
  }

  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  get feedback() {
    return this.form.controls;
  }

  submit() {
    this.info.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const feedback = new FormData();
    feedback.append('name', this.feedback.name.value);
    feedback.append('email', this.feedback.email.value);
    feedback.append('phone', this.feedback.phone.value);
    feedback.append('message', this.feedback.message.value);

    this.httpService.feedbackMessage(feedback).subscribe(
      (data: Response) => {
        this.response = {...data};
        this.info.success = true;
        this.form.reset();
        this.info.submitted = false;
        setTimeout(() => {
          this.info.success = false;
        }, 5000);

      },
      error => {
        this.info.error = 'Выбачайце, фдбылася памылка на сэрвэры.<br> Мы выправім яе ў бліжэйшы час!';
        setTimeout(() => {
          this.info.error = null;
        }, 7000);
      }
    );

  }

}
