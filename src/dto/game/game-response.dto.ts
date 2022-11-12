import { GenreResponseDto } from '../genre/genre-response.dto';

export interface GameResponseDto {
  id: number;
  name: string;
  img: string;
  genres: GenreResponseDto[];
}
