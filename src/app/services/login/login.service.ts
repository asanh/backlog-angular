import { Injectable } from '@angular/core';
import { RestService } from '../rest/rest.service';
import { UserRequestDto } from '../../../dto/user/user-request.dto';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private rest: RestService) {}

  public async auth(data: UserRequestDto) {
    return await this.rest.post(`auth/login`, data, {
      noToken: true,
    });
  }

  public async createUser(data: UserRequestDto) {
    return await this.rest.post('auth/registration', data);
  }
}
