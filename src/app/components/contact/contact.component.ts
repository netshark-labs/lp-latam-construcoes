import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="py-20 md:py-28 bg-white relative overflow-hidden">
      <div class="absolute inset-0 blueprint-grid opacity-20"></div>
      <div class="section-container relative z-10">
        <div class="text-center mb-16 reveal">
          <p class="text-sm font-heading font-semibold text-safety uppercase tracking-widest mb-3">{{ i18n.t('contact.tag') }}</p>
          <h2 class="section-heading">{{ i18n.t('contact.title') }}</h2>
          <p class="section-subheading mx-auto">{{ i18n.t('contact.sub') }}</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Contact Info Cards -->
          <div class="space-y-4 reveal">
            <div class="p-5 rounded-xl bg-gray-50 border border-gray-200 hover:border-safety/30 hover:shadow-md transition-all duration-300">
              <svg class="w-7 h-7 text-safety mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <h3 class="text-navy font-heading font-semibold text-sm mb-1">{{ i18n.t('contact.email') }}</h3>
              <p class="text-steel text-sm font-body">contato&#64;latamconstrucoes.com.br</p>
            </div>
            <div class="p-5 rounded-xl bg-gray-50 border border-gray-200 hover:border-safety/30 hover:shadow-md transition-all duration-300">
              <svg class="w-7 h-7 text-safety mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <h3 class="text-navy font-heading font-semibold text-sm mb-1">{{ i18n.t('contact.phone') }}</h3>
              <p class="text-steel text-sm font-body">+55 (11) 9999-9999</p>
            </div>

            <!-- 3 Locations -->
            <div class="p-5 rounded-xl bg-gray-50 border border-gray-200 hover:border-safety/30 hover:shadow-md transition-all duration-300">
              <svg class="w-7 h-7 text-safety mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <h3 class="text-navy font-heading font-semibold text-sm mb-2">{{ i18n.t('contact.location') }}</h3>
              <div class="space-y-2">
                <div class="flex items-start gap-2">
                  <span class="text-safety text-xs font-heading font-bold mt-0.5">HQ</span>
                  <p class="text-steel/70 text-xs font-body">Pça XV de Novembro, 20 – Centro – RJ</p>
                </div>
                <div class="flex items-start gap-2">
                  <svg class="w-3.5 h-3.5 text-safety mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"/></svg>
                  <p class="text-steel/70 text-xs font-body">R. Carlos A. Altimari, 71 – Penápolis – SP</p>
                </div>
                <div class="flex items-start gap-2">
                  <svg class="w-3.5 h-3.5 text-safety mt-0.5 flex-shrink-0" viewBox="0 0 20 14"><rect width="20" height="4.67" fill="#D32F2F"/><rect y="4.67" width="20" height="4.67" fill="#FFFFFF"/><rect y="9.33" width="20" height="4.67" fill="#1565C0"/></svg>
                  <p class="text-steel/70 text-xs font-body">Av. Aviadores Del Chaco, 2.351 – Assunción – PY</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2 reveal-right">
            <form (submit)="onSubmit($event)" class="p-8 rounded-2xl bg-gray-50 border border-gray-200 shadow-md">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label class="block text-navy font-semibold text-sm font-body mb-2">{{ i18n.t('contact.form.name') }}</label>
                  <input type="text" [placeholder]="i18n.t('contact.form.name.ph')" [(ngModel)]="form.name" name="name" required
                         class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-navy text-sm font-body
                                focus:border-safety focus:outline-none focus:ring-1 focus:ring-safety transition-colors placeholder-gray-400">
                </div>
                <div>
                  <label class="block text-navy font-semibold text-sm font-body mb-2">{{ i18n.t('contact.form.company') }}</label>
                  <input type="text" [placeholder]="i18n.t('contact.form.company.ph')" [(ngModel)]="form.company" name="company" required
                         class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-navy text-sm font-body
                                focus:border-safety focus:outline-none focus:ring-1 focus:ring-safety transition-colors placeholder-gray-400">
                </div>
                <div>
                  <label class="block text-navy font-semibold text-sm font-body mb-2">{{ i18n.t('contact.form.email') }}</label>
                  <input type="email" placeholder="email@empresa.com" [(ngModel)]="form.email" name="email" required
                         class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-navy text-sm font-body
                                focus:border-safety focus:outline-none focus:ring-1 focus:ring-safety transition-colors placeholder-gray-400">
                </div>
                <div>
                  <label class="block text-navy font-semibold text-sm font-body mb-2">{{ i18n.t('contact.form.phone') }}</label>
                  <input type="tel" placeholder="+55 (11) 9999-9999" [(ngModel)]="form.phone" name="phone"
                         class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-navy text-sm font-body
                                focus:border-safety focus:outline-none focus:ring-1 focus:ring-safety transition-colors placeholder-gray-400">
                </div>
              </div>
              <div class="mb-6">
                <label class="block text-navy font-semibold text-sm font-body mb-2">{{ i18n.t('contact.form.desc') }}</label>
                <textarea [placeholder]="i18n.t('contact.form.desc.ph')" [(ngModel)]="form.description" name="description" required rows="5"
                          class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-navy text-sm font-body
                                 focus:border-safety focus:outline-none focus:ring-1 focus:ring-safety transition-colors placeholder-gray-400 resize-none"></textarea>
              </div>
              <button type="submit" [disabled]="submitted"
                      class="btn-primary w-full md:w-auto text-base py-3.5 px-10"
                      [class.opacity-60]="submitted" [class.cursor-not-allowed]="submitted">
                {{ submitted ? i18n.t('contact.form.sent') : i18n.t('contact.form.submit') }}
              </button>
            </form>
          </div>
        </div>

        <!-- Map and Office Photo Section -->
        <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 reveal">
          <!-- Office Photo (Placeholder / Image) -->
          <div class="h-64 md:h-80 rounded-2xl overflow-hidden shadow-md relative group bg-gray-100 border border-gray-200">
            <!-- Fallback Icon if image is missing -->
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <svg class="w-12 h-12 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
              <span class="text-sm text-steel font-body">{{ i18n.t('contact.office.photo') || 'Foto do Escritório (Substituir imagem)' }}</span>
              <span class="text-xs text-steel/60 font-body">public/images/assets/escritorio.png</span>
            </div>
            <!-- The actual image tag -->
            <img src="images/assets/escritorio.png" alt="Escritório Comercial" 
                 class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-10" 
                 onerror="this.style.opacity='0'">
          </div>

          <!-- Google Maps Iframe -->
          <div class="h-64 md:h-80 rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-50 p-2">
            <div class="w-full h-full rounded-xl overflow-hidden">
              <iframe 
                src="https://maps.google.com/maps?q=Pra%C3%A7a%20XV%20de%20Novembro,%2020,%20Centro,%20Rio%20de%20Janeiro&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  form = { name: '', company: '', email: '', phone: '', description: '' };
  submitted = false;
  constructor(public i18n: I18nService, private cdr: ChangeDetectorRef) { }
  async onSubmit(e: Event): Promise<void> {
    e.preventDefault();
    this.submitted = true;
    this.cdr.markForCheck();

    const formData = new URLSearchParams();
    formData.append('form-name', 'contact'); // Must match the name="contact" in index.html
    formData.append('name', this.form.name);
    formData.append('company', this.form.company);
    formData.append('email', this.form.email);
    formData.append('phone', this.form.phone);
    formData.append('description', this.form.description);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString()
      });
      // Success: Keep the "Sent ✓" button for 3 seconds then clear form
      setTimeout(() => { 
        this.submitted = false; 
        this.form = { name: '', company: '', email: '', phone: '', description: '' }; 
        this.cdr.markForCheck(); 
      }, 3000);
    } catch (error) {
      console.error('Netlify Form Submit Error:', error);
      this.submitted = false;
      this.cdr.markForCheck();
      alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
    }
  }
}
