import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../services/rest/rest.service';
import { GameResponseDto } from '../../../../dto/game/game-response.dto';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss'],
})
export class BacklogComponent implements OnInit {
  games: GameResponseDto[] = [];

  constructor(private rest: RestService) {}

  async ngOnInit(): Promise<void> {
    this.games = await this.rest.get('games');
  }
}
