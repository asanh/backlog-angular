import { Injectable } from '@angular/core';
import { RestService } from '../rest/rest.service';
import { UserRequestDto } from '../../../dto/user/user-request.dto';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  statusMessage = '';

  constructor(private rest: RestService) {}

  public async auth(data: UserRequestDto): Promise<{ token: string }> {
    return await this.rest.post(`auth/login`, data, {
      noToken: true,
    });
  }

  public async createUser(data: UserRequestDto): Promise<boolean> {
    return await this.rest.post('auth/registration', data);
  }

  public async submitResetPasswordRequest(data: {
    email: string;
  }): Promise<boolean> {
    return await this.rest.post('auth/reset', data);
  }
}
