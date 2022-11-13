import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { BacklogComponent } from '../../components/backlog/backlog.component';
import { CompletedComponent } from '../../components/completed/completed.component';
import { ReviewComponent } from '../../components/review/review.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    BacklogComponent,
    CompletedComponent,
    ReviewComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, MainRoutingModule],
  exports: [
    MainComponent,
    BacklogComponent,
    CompletedComponent,
    ReviewComponent,
    ProfileComponent,
  ],
})
export class MainModule {}
