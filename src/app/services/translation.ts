import { Injectable, inject, signal, effect } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Language {
  code: string;
  label: string;
  flag: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translate = inject(TranslateService);

  // Signal réactif pour la langue courante
  currentLang = signal<string>('fr');

  readonly availableLanguages: Language[] = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
  ];

  constructor() {
    const savedLang = typeof window !== 'undefined'
      ? localStorage.getItem('lang') || 'fr'
      : 'fr';

    this.translate.addLangs(['fr', 'en', 'de']);
    this.translate.setDefaultLang('fr');
    this.translate.use(savedLang);
    this.currentLang.set(savedLang);
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang.set(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang);
    }
  }

  getCurrentLanguage(): Language | undefined {
    return this.availableLanguages.find(l => l.code === this.currentLang());
  }
}