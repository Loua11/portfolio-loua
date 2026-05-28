import { Component, signal, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  translationService = inject(TranslationService);

  isScrolled = signal(false);
  isMenuOpen = signal(false);
  isLangDropdownOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  toggleLangDropdown(event: Event) {
    event.stopPropagation();
    this.isLangDropdownOpen.update(v => !v);
  }

  switchLanguage(lang: string, event: Event) {
    event.stopPropagation();
    this.translationService.switchLanguage(lang);
    this.isLangDropdownOpen.set(false);
  }

  get currentLanguage() {
    return this.translationService.getCurrentLanguage();
  }

  get currentLangCode() {
    return this.translationService.currentLang();
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeMenu();
    this.isLangDropdownOpen.set(false);
  }
}