import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: Validators.compose([Validators.required, Validators.email]),
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  errorMessage: string = '';
  statusMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.statusMessage.length > 0) {
      this.statusMessage = this.authService.statusMessage;
      this.authService.statusMessage = '';
    }
  }

  public async login() {
    this.errorMessage = '';
    this.statusMessage = '';

    if (
      this.loginForm.controls.email.invalid ||
      this.loginForm.value.email === undefined ||
      this.loginForm.value.password === undefined
    ) {
      this.errorMessage = 'Incorrect credentials';
      return;
    }

    try {
      const result = await this.authService.auth({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      });

      if (result.token?.length) {
        localStorage.setItem('authToken', result.token);
        await this.router.navigate(['/main/backlog']);
      }
    } catch (e: any) {
      this.errorMessage = e.response?.data?.message ?? 'Incorrect credentials';
      return;
    }
  }

  async goToRegistration() {
    await this.router.navigate(['login/registration']);
  }

  async goToResetPassword() {
    await this.router.navigate(['login/reset-password']);
  }
}
