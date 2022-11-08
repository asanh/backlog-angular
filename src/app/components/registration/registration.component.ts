import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public registrationForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: Validators.compose([Validators.required, Validators.email]),
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  async signUp() {
    this.errorMessage = '';

    if (
      this.registrationForm.controls.email.invalid ||
      this.registrationForm.value.email === undefined ||
      this.registrationForm.value.password === undefined ||
      this.registrationForm.value.name === undefined
    ) {
      this.errorMessage = 'Please fill all field correctly';
      return;
    }

    try {
      const result = await this.loginService.createUser({
        name: this.registrationForm.value.name,
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password,
      });

      if (result.token?.length) {
        localStorage.setItem('token', result.token);
      }
    } catch (e: any) {
      this.errorMessage =
        e.response?.data?.message ?? 'Something went wrong. Please, try again';
      return;
    }
  }

  async goToLogin() {
    await this.router.navigate(['login']);
  }
}
