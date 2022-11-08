import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
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

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  public async login() {
    this.errorMessage = '';

    if (
      this.loginForm.controls.email.invalid ||
      this.loginForm.value.email === undefined ||
      this.loginForm.value.password === undefined
    ) {
      this.errorMessage = 'Incorrect credentials';
      return;
    }

    try {
      const result = await this.loginService.auth({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      });

      if (result.token?.length) {
        localStorage.setItem('token', result.token);
      }
    } catch (e: any) {
      this.errorMessage = e.response?.data?.message ?? 'Incorrect credentials';
      return;
    }
  }

  async goToRegistration() {
    await this.router.navigate(['login/registration']);
  }
}
