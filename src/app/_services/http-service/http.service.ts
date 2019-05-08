import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Response } from '../../_interfaces/response';

@Injectable()
export class HttpService {
  private base = environment.production ? `http://${environment.host}/${environment.prefix}` : `http://${environment.host}:8000/${environment.prefix}`;
  constructor(private http: HttpClient) {}

  feedbackMessage(data: any) {
    return this.http.post<Response>(`${this.base}/feedback/message/send`, data);
  }

  feedbackPartner(data: any) {
    return this.http.post<Response>(`${this.base}/feedback/partners/send`, data);
  }

  userRegister(data: any) {
    return this.http.post<Response>(`${this.base}/auth/register`, data);
  }
}
