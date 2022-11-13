import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest/rest.service';
import { GameResponseDto } from '../../../dto/game/game-response.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss'],
})
export class BacklogComponent implements OnInit {
  games: GameResponseDto[] = [];

  constructor(private rest: RestService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.games = await this.rest.get('games');
  }

  async goToGame(gameId: number) {
    await this.router.navigate([`main/game/${gameId}`]);
  }
}
