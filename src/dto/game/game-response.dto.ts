import { GenreResponseDto } from '../genre/genre-response.dto';
import { PlatformResponseDto } from '../platform/platform-response.dto';
import { PlaythroughResponseDto } from '../playthrough/playthrough-response.dto';

export interface GameResponseDto {
  id: number;
  name: string;
  img: string;
  howLongToBeat: string;
  platforms: PlatformResponseDto[];
  developer: string;
  publisher: string;
  releaseDate: string;
  playthrough: PlaythroughResponseDto;
  genres: GenreResponseDto[];
}
