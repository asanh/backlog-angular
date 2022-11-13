export interface GameRequestDto {
  name: string;
  img: string;
  genres: number[];
  howLongToBeat: string;
  platforms: number[];
  developer: string;
  publisher: string;
  releaseDate: string;
}
