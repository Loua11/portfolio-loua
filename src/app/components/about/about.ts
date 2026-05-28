import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Language {
  nameKey: string;
  levelKey: string;
  flag: string;
  percentage: number;
}

interface SoftSkill {
  icon: string;
  titleKey: string;
  descKey: string;
}

interface Certification {
  titleKey: string;
  issuerKey: string;
  dateKey: string;
  icon: string;
}

type TabType = 'presentation' | 'languages' | 'softSkills' | 'certifications';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  activeTab = signal<TabType>('presentation');

  languages: Language[] = [
    { nameKey: 'about.languagesList.arabic', levelKey: 'about.languagesList.arabicLevel', flag: '🇹🇳', percentage: 100 },
    { nameKey: 'about.languagesList.french', levelKey: 'about.languagesList.frenchLevel', flag: '🇫🇷', percentage: 95 },
    { nameKey: 'about.languagesList.english', levelKey: 'about.languagesList.englishLevel', flag: '🇬🇧', percentage: 80 },
    { nameKey: 'about.languagesList.german', levelKey: 'about.languagesList.germanLevel', flag: '🇩🇪', percentage: 50 }
  ];

  softSkills: SoftSkill[] = [
    { icon: '🤝', titleKey: 'about.softSkillsList.teamwork', descKey: 'about.softSkillsList.teamworkDesc' },
    { icon: '🎯', titleKey: 'about.softSkillsList.motivation', descKey: 'about.softSkillsList.motivationDesc' },
    { icon: '🧠', titleKey: 'about.softSkillsList.curiosity', descKey: 'about.softSkillsList.curiosityDesc' },
    { icon: '⚡', titleKey: 'about.softSkillsList.problemSolving', descKey: 'about.softSkillsList.problemSolvingDesc' },
    { icon: '🌍', titleKey: 'about.softSkillsList.multicultural', descKey: 'about.softSkillsList.multiculturalDesc' },
    { icon: '⏱️', titleKey: 'about.softSkillsList.timeManagement', descKey: 'about.softSkillsList.timeManagementDesc' }
  ];

  certifications: Certification[] = [
    { titleKey: 'about.certificationsList.sdg', issuerKey: 'about.certificationsList.sdgIssuer', dateKey: 'about.certificationsList.sdgDate', icon: '🌱' },
    { titleKey: 'about.certificationsList.commercial', issuerKey: 'about.certificationsList.commercialIssuer', dateKey: 'about.certificationsList.commercialDate', icon: '💼' },
    { titleKey: 'about.certificationsList.tcf', issuerKey: 'about.certificationsList.tcfIssuer', dateKey: 'about.certificationsList.tcfDate', icon: '🇫🇷' }
  ];

  setTab(tab: TabType): void {
    this.activeTab.set(tab);
  }
}