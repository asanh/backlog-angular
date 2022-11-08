import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  public resetPasswordForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: Validators.compose([Validators.required, Validators.email]),
    }),
  });

  errorMessage: string = '';
  statusMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public async resetPassword() {
    this.errorMessage = '';
    this.statusMessage = '';

    if (
      this.resetPasswordForm.controls.email.invalid ||
      this.resetPasswordForm.value.email === undefined
    ) {
      this.errorMessage = 'Incorrect credentials';
      return;
    }

    try {
      const result = await this.authService.submitResetPasswordRequest({
        email: this.resetPasswordForm.value.email,
      });
    } catch (e) {}

    this.statusMessage = 'Check your Email for further instructions';
  }

  async goBack() {
    await this.router.navigate(['login']);
  }
}
