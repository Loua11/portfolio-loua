import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface ExperienceItem {
  titleKey: string;
  companyKey: string;
  locationKey: string;
  periodKey: string;
  descriptionKey: string;
  achievements: string[];
  techs: string[];
  icon: string;
  color: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      titleKey: 'experience.md.title',
      companyKey: 'experience.md.company',
      locationKey: 'experience.md.location',
      periodKey: 'experience.md.period',
      descriptionKey: 'experience.md.description',
      achievements: [
        'experience.md.achievements.0',
        'experience.md.achievements.1',
        'experience.md.achievements.2',
        'experience.md.achievements.3'
      ],
      techs: ['Spring Boot', 'Angular', 'Java', 'MySQL', 'REST API', 'Git'],
      icon: '💻',
      color: 'primary'
    }
  ];
}