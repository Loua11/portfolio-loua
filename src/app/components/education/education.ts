import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface EducationItem {
  titleKey: string;
  schoolKey: string;
  locationKey: string;
  periodKey: string;
  descriptionKey: string;
  current: boolean;
  flag: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
  educations: EducationItem[] = [
    {
      titleKey: 'education.marburg.title',
      schoolKey: 'education.marburg.school',
      locationKey: 'education.marburg.location',
      periodKey: 'education.marburg.period',
      descriptionKey: 'education.marburg.description',
      current: true,
      flag: '🇩🇪'
    },
    {
      titleKey: 'education.esprit.title',
      schoolKey: 'education.esprit.school',
      locationKey: 'education.esprit.location',
      periodKey: 'education.esprit.period',
      descriptionKey: 'education.esprit.description',
      current: false,
      flag: '🇹🇳'
    },
    {
      titleKey: 'education.iset.title',
      schoolKey: 'education.iset.school',
      locationKey: 'education.iset.location',
      periodKey: 'education.iset.period',
      descriptionKey: 'education.iset.description',
      current: false,
      flag: '🇹🇳'
    }
  ];
}