import { Injectable } from '@angular/core';
import { ThemeNames } from '../../common/enums/theme-names';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: string;

  constructor() {
    this.currentTheme = localStorage.getItem('theme') ?? ThemeNames.dark;
    this.setTheme(this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
  }

  public setTheme(newTheme: string) {
    document.body.classList.remove(this.currentTheme);
    this.currentTheme = newTheme;
    document.body.classList.add(this.currentTheme);
  }
}
