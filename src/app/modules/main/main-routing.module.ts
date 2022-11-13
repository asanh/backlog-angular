import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { BacklogComponent } from '../../components/backlog/backlog.component';
import { CompletedComponent } from '../../components/completed/completed.component';
import { ReviewComponent } from '../../components/review/review.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { GameComponent } from '../../components/game/game.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'backlog',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'backlog',
        component: BacklogComponent,
      },
      {
        path: 'completed',
        component: CompletedComponent,
      },
      {
        path: 'review',
        component: ReviewComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'game/:id',
        component: GameComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
