import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, CommonModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  currentLang!: string;
  constructor(private translate: TranslateService) {
    this.currentLang = localStorage.getItem('language') ?? 'en';
    this.translate.use(this.currentLang);
    this.setDirection(this.currentLang);

  }

  switchLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLang);
    this.setDirection(this.currentLang);
    localStorage.setItem('language',this.currentLang)
  }
  setDirection(lang: string) {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
  }
}
