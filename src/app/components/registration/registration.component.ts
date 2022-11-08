import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
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
  statusMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async signUp() {
    this.errorMessage = '';
    this.statusMessage = '';

    if (
      this.registrationForm.controls.email.invalid ||
      this.registrationForm.value.email === undefined ||
      this.registrationForm.value.password === undefined ||
      this.registrationForm.value.name === undefined
    ) {
      this.errorMessage = 'Please fill all fields correctly';
      return;
    }

    try {
      const result = await this.authService.createUser({
        name: this.registrationForm.value.name,
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password,
      });

      if (result) {
        this.authService.statusMessage = `Success! You may now Sign In`;
        await this.router.navigate(['login']);
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
