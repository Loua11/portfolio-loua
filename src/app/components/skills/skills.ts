import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  titleKey: string;
  icon: string;
  color: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  categories: SkillCategory[] = [
    {
  titleKey: 'skills.backend',
  icon: '⚙️',
  color: 'var(--primary)',
  skills: [
    { name: 'Java', level: 85 },
    { name: 'Spring Boot', level: 85 },
    { name: 'PHP', level: 75 },
    { name: 'Symfony 4/5', level: 80 },
    { name: 'Swagger / OpenAPI', level: 95 }
  ]
},
    {
      titleKey: 'skills.frontend',
      icon: '🎨',
      color: 'var(--secondary)',
      skills: [
        { name: 'Angular', level: 85 },
        { name: 'HTML / CSS', level: 90 },
        { name: 'JavaScript / TypeScript', level: 80 }
      ]
    },
    {
      titleKey: 'skills.devops',
      icon: '🚀',
      color: 'var(--accent)',
      skills: [
        { name: 'Jenkins', level: 80 },
        { name: 'Docker', level: 80 },
        { name: 'Grafana / Prometheus', level: 70 },
        { name: 'SonarQube / Nexus', level: 75 },
        { name: 'Git', level: 90 }
      ]
    },
    {
      titleKey: 'skills.database',
      icon: '💾',
      color: 'var(--pink)',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 70 },
        { name: 'Oracle', level: 75 }
      ]
    },
    {
      titleKey: 'skills.blockchain',
      icon: '🔗',
      color: 'var(--blockchain)',
      skills: [
        { name: 'Ethereum', level: 50 },
        { name: 'Solidity', level: 50 },
        { name: 'Smart Contracts', level: 50 },
        { name: 'Web3.js', level: 45 }
      ]
    },
    {
      titleKey: 'skills.tools',
      icon: '🛠️',
      color: 'var(--text-primary)',
      skills: [
        { name: 'Jira', level: 80 },
        { name: 'GitHub / GitLab', level: 90 },
        { name: 'Postman', level: 75 },
        { name: 'Agile / Scrum', level: 80 }
      ]
    }
  ];
}