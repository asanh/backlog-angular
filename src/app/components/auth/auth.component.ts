import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';

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

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    // this.loginService
    //   .createUser('platon@lumpov.com', '123')
    //   .then((user) => console.log(user));
  }

  public async login() {
    if (
      this.loginForm.controls.email.invalid ||
      this.loginForm.value.email === undefined ||
      this.loginForm.value.password === undefined
    ) {
      console.log('invalid');
      return;
    }

    console.log('request');
    const result = await this.loginService.auth(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
  }
}
