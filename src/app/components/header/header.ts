import { Component, signal, computed, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Language {
  code: string;
  label: string;
  flag: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private translate = inject(TranslateService);

  // === États ===
  isMenuOpen = signal(false);
  isLangDropdownOpen = signal(false);
  isScrolled = signal(false);
  currentLangCode = signal('fr');

  // Compatibilité avec ancien code
  isLangOpen = this.isLangDropdownOpen;
  currentLang = this.currentLangCode;

  // === Liste des langues ===
  availableLanguages: Language[] = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
  ];
  languages = this.availableLanguages; // alias

  // Service de traduction exposé pour le template
  translationService = {
    availableLanguages: this.availableLanguages
  };

  // Langue actuelle (objet complet)
  currentLanguage = computed(() => {
    const code = this.currentLangCode();
    return this.availableLanguages.find(l => l.code === code);
  });

  // === Scroll detection ===
  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  // === Menu burger ===
  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  // === Dropdown langues ===
  toggleLangDropdown(event: Event) {
    event.stopPropagation();
    this.isLangDropdownOpen.update(v => !v);
  }

  toggleLang() {
    this.isLangDropdownOpen.update(v => !v);
  }

  // === Changer de langue ===
  switchLanguage(code: string, event: Event) {
    event.stopPropagation();
    this.currentLangCode.set(code);
    this.translate.use(code);
    this.isLangDropdownOpen.set(false);
  }

  selectLang(code: string) {
    this.currentLangCode.set(code);
    this.translate.use(code);
    this.isLangDropdownOpen.set(false);
  }

  // === Fermer le dropdown si on clique ailleurs ===
  @HostListener('document:click')
  onDocumentClick() {
    this.isLangDropdownOpen.set(false);
  }

  // === Navigation ===
  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen.set(false);
  }

  // === CV multilingue ===
  getCvPath(): string {
    const lang = this.currentLangCode();
    if (lang === 'fr') return 'cv/CV-Loua-Jday-FR.pdf';
    return 'cv/CV-Loua-Jday-EN.pdf';
  }

  getCvName(): string {
    const lang = this.currentLangCode();
    if (lang === 'fr') return 'CV-Loua-Jday-FR.pdf';
    return 'CV-Loua-Jday-EN.pdf';
  }
}