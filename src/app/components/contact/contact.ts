import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  status = signal<'idle' | 'success' | 'error'>('idle');
  isSubmitting = signal(false);

  submitForm() {
    if (!this.formData.email || !this.formData.message) {
      this.status.set('error');
      setTimeout(() => this.status.set('idle'), 3000);
      return;
    }

    this.isSubmitting.set(true);

    // Simulation d'envoi (à remplacer plus tard par EmailJS ou backend)
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.status.set('success');
      this.formData = { name: '', email: '', subject: '', message: '' };
      setTimeout(() => this.status.set('idle'), 5000);
    }, 1200);
  }
}