import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string; // miniature pour les vidéos (optionnel)
}

interface Project {
  titleKey: string;
  descriptionKey: string;
  periodKey: string;
  category: 'professional' | 'personal' | 'academic';
  icon: string;
  color: string;
  tags: string[];
  link?: string;
  media?: MediaItem[];
}

type Filter = 'all' | 'professional' | 'personal' | 'academic';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  activeFilter = signal<Filter>('all');

  selectedProject = signal<Project | null>(null);
  currentMediaIndex = signal(0);

  projects: Project[] = [
  // 2025 — Le plus récent
  {
    titleKey: 'projects.docchain.title',
    descriptionKey: 'projects.docchain.description',
    periodKey: 'projects.docchain.period',
    category: 'professional',
    icon: '🔗',
    color: 'primary',
    tags: ['Ethereum', 'Solidity', 'Angular', 'Spring Boot', 'DevOps'],
    media: [
      { type: 'image', src: 'images/docchain/screen1.jpg' },
      { type: 'image', src: 'images/docchain/screen2.jpg' },
      { type: 'image', src: 'images/docchain/screen3.jpg' },
      { type: 'image', src: 'images/docchain/screen4.jpg' },
      { type: 'image', src: 'images/docchain/screen5.jpg' },
      { type: 'image', src: 'images/docchain/screen6.jpg' },
      { type: 'image', src: 'images/docchain/screen7.jpg' },
      { type: 'image', src: 'images/docchain/screen8.jpg' },
      { type: 'image', src: 'images/docchain/screen9.jpg' },
      { type: 'image', src: 'images/docchain/screen10.jpg' },
      { type: 'image', src: 'images/docchain/screen11.jpg' },
      { type: 'image', src: 'images/docchain/screen12.jpg' }
    ]
  },
  // 2024 — E-commerce (Société MD)
  {
    titleKey: 'projects.ecommerce.title',
    descriptionKey: 'projects.ecommerce.description',
    periodKey: 'projects.ecommerce.period',
    category: 'professional',
    icon: '🛒',
    color: 'primary',
    tags: ['Symfony 5', 'PHP', 'MySQL', 'Bootstrap']
  },
  // 2024 — KADDEM DevOps
  {
    titleKey: 'projects.kaddem.title',
    descriptionKey: 'projects.kaddem.description',
    periodKey: 'projects.kaddem.period',
    category: 'academic',
    icon: '⚙️',
    color: 'accent',
    tags: ['Jenkins', 'Docker', 'Grafana', 'Prometheus', 'SonarQube']
  },
  // 2024 — Courzelo
  {
    titleKey: 'projects.courzelo.title',
    descriptionKey: 'projects.courzelo.description',
    periodKey: 'projects.courzelo.period',
    category: 'academic',
    icon: '📚',
    color: 'secondary',
    tags: ['Spring Boot', 'Angular', 'MongoDB'],
    media: [
      { type: 'video', src: 'videos/courzelo/demo.mp4' }
    ]
  },
  // 2023 — Mobilité Internationale
  {
    titleKey: 'projects.mobility.title',
    descriptionKey: 'projects.mobility.description',
    periodKey: 'projects.mobility.period',
    category: 'professional',
    icon: '🌍',
    color: 'secondary',
    tags: ['Symfony 5', 'PHP', 'Bootstrap'],
    media: [
      { type: 'video', src: 'videos/mobility/demo.mp4' }
    ]
  },
  // 2023 — AgroEasy (Symfony + Mobile + Desktop)
  {
    titleKey: 'projects.agroeasy.title',
    descriptionKey: 'projects.agroeasy.description',
    periodKey: 'projects.agroeasy.period',
    category: 'academic',
    icon: '🌱',
    color: 'pink',
    tags: ['Symfony', 'PHP', 'Mobile', 'Desktop', 'MySQL']
  },
  // 2019-2022 — Société MD
 
  {
    titleKey: 'projects.supervision.title',
    descriptionKey: 'projects.supervision.description',
    periodKey: 'projects.supervision.period',
    category: 'academic',
    icon: '🏭',
    color: 'accent',
    tags: ['TIA Portal', 'Automatisme', 'Supervision']
  }
];

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.projects;
    return this.projects.filter(p => p.category === filter);
  });

  setFilter(filter: Filter) {
    this.activeFilter.set(filter);
  }

  countByCategory(category: Filter): number {
    if (category === 'all') return this.projects.length;
    return this.projects.filter(p => p.category === category).length;
  }

  openProject(project: Project) {
    this.selectedProject.set(project);
    this.currentMediaIndex.set(0);
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject.set(null);
    document.body.style.overflow = '';
  }

  nextMedia() {
    const project = this.selectedProject();
    if (!project?.media) return;
    const next = (this.currentMediaIndex() + 1) % project.media.length;
    this.currentMediaIndex.set(next);
  }

  prevMedia() {
    const project = this.selectedProject();
    if (!project?.media) return;
    const prev = (this.currentMediaIndex() - 1 + project.media.length) % project.media.length;
    this.currentMediaIndex.set(prev);
  }

  setMediaIndex(index: number) {
    this.currentMediaIndex.set(index);
  }

  // Helpers pour le template
  getMediaCount(project: Project): number {
    return project.media?.length || 0;
  }

  getImageCount(project: Project): number {
    return project.media?.filter(m => m.type === 'image').length || 0;
  }

  getVideoCount(project: Project): number {
    return project.media?.filter(m => m.type === 'video').length || 0;
  }
}