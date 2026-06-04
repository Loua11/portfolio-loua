import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private translate = inject(TranslateService);

  isMenuOpen = signal(false);
  isLangOpen = signal(false);
  currentLang = signal('fr');

  languages = [
    { code: 'fr', label: 'FR', flag: '🇫🇷' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'de', label: 'DE', flag: '🇩🇪' }
  ];

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  toggleLang() {
    this.isLangOpen.update(v => !v);
  }

  selectLang(code: string) {
    this.currentLang.set(code);
    this.translate.use(code);
    this.isLangOpen.set(false);
  }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen.set(false);
  }

  // 🆕 Retourne le bon chemin du CV selon la langue active
  getCvPath(): string {
    const lang = this.currentLang();
    if (lang === 'en') return 'cv/CV-Loua-Jday-EN.pdf';
    if (lang === 'de') return 'cv/CV-Loua-Jday-EN.pdf';   // pour l'instant DE pointe vers EN
    return 'cv/CV-Loua-Jday-FR.pdf';  // par défaut FR
  }

  // 🆕 Retourne le bon nom de téléchargement
  getCvName(): string {
    const lang = this.currentLang();
    if (lang === 'en') return 'CV-Loua-Jday-EN.pdf';
    if (lang === 'de') return 'CV-Loua-Jday-EN.pdf';
    return 'CV-Loua-Jday-FR.pdf';
  }
}