import { PlaythroughStatusEnum } from '../../app/common/enums/playthrough-status.enum';

export interface PlaythroughRequestDto {
  status: PlaythroughStatusEnum;
  score: string;
  hours: string;
  store: string;
  notes: string;
  completedOn: string;
}
