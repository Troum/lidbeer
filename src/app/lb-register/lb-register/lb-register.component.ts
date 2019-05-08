import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MustMatch } from '../../_validators/must-match';
import {HttpService} from '../../_services/http-service/http.service';
import {Response} from '../../_interfaces/response';

@Component({
  selector: 'app-lb-register',
  templateUrl: './lb-register.component.html',
  styleUrls: ['./lb-register.component.scss']
})
export class LbRegisterComponent implements OnInit {

  public form: FormGroup;
  public info = {
    title: 'Рэгістрацыя',
    labels: {
      name: 'Імя і прозвішча',
      email: 'Ваш e-mail',
      password: 'Ваш пароль',
      password_confirmation: 'Падцвержанне вашага паролю'
    },
    errors: {
      name: 'Імя і прозвішча абавязковы!',
      email: {
        required: 'E-mail абавязковы!',
        email: 'E-mail павінны быць валідным!'
      },
      password: 'Пароль з\'яўляецца абавязковым!',
      password_confirmation: {
        required: 'Падцвержанне вашага паролю з\'яўляецца абавязковым!',
        mustMatch: 'Паролі не аднолькавыя!'
      }
    },
    submitted: false
  };
  public response: Response;
  @HostListener('document:click', ['$event']) documentClick(event: MouseEvent) {
    this.info.submitted = false;
  }

  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'password_confirmation')
    });
  }

  get register() {
    return this.form.controls;
  }

  submit() {
    this.info.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const fd: FormData = new FormData();
    fd.append('name', this.register.name.value);
    fd.append('email', this.register.email.value);
    fd.append('password', this.register.password.value);
    fd.append('password_confirmation', this.register.password_confirmation.value);

    this.httpService.userRegister(fd).subscribe(
      (data: Response) => {
            this.form.reset();
            this.response = {...data};
      }
    );
  }

}
