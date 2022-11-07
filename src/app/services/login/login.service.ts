import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RestService } from '../rest/rest.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private rest: RestService) {}

  public async auth(email: string, password: string) {
    return this.rest.post(`auth/login`, { email: email, password: password });
  }

  public async createUser(email: string, password: string) {
    return await this.rest.post('/auth/registration', {
      email: email,
      password: password,
    });
  }
}
