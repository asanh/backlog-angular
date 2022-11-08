import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from '../../components/registration/registration.component';
import { ResetPasswordComponent } from '../../components/reset-password/reset-password.component';
import { AuthComponent } from '../../components/auth/auth.component';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'registration',
        component: RegistrationComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
      {
        path: '',
        component: AuthComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [RegistrationComponent, ResetPasswordComponent, AuthComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [
    RouterModule,
    RegistrationComponent,
    ResetPasswordComponent,
    AuthComponent,
  ],
})
export class LoginRoutingModule {}
