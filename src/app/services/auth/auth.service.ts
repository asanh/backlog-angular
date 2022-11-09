import { Injectable } from '@angular/core';
import { RestService } from '../rest/rest.service';
import { UserRequestDto } from '../../../dto/user/user-request.dto';
import { UserResponseDto } from '../../../dto/user/user-response.dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  statusMessage = '';
  currentUser: UserResponseDto | undefined;

  constructor(private rest: RestService, private router: Router) {}

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

  public async isAuthenticated(): Promise<boolean> {
    await this.getUser();
    return !!this.currentUser;
  }

  public async getUser(): Promise<UserResponseDto | undefined> {
    if (!this.currentUser) {
      try {
        this.currentUser = await this.rest.post('auth/user-by-token', {
          token: localStorage.getItem('authToken'),
        });
      } catch (e) {
        localStorage.removeItem('authToken');
        await this.router.navigate(['/login']);
      }
    }

    return this.currentUser;
  }

  public async logout(): Promise<void> {
    localStorage.removeItem('authToken');
    this.currentUser = undefined;
    await this.router.navigate(['/login']);
  }
}
