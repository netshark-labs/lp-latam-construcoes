import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="projects" class="py-20 md:py-28 bg-white relative">
      <div class="section-container">
        <div class="text-center mb-16 reveal">
          <p class="text-sm font-heading font-semibold text-safety uppercase tracking-widest mb-3">{{ i18n.t('proj.tag') }}</p>
          <h2 class="section-heading">{{ i18n.t('proj.title') }}</h2>
          <p class="section-subheading mx-auto">{{ i18n.t('proj.sub') }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Removed "group" and hover interactions to prevent misleading click expectations -->
          <div *ngFor="let project of projects; let i = index" class="industrial-card overflow-hidden reveal bg-white border border-gray-100 shadow-lg" [style.transition-delay.ms]="i * 150">
            <div class="relative h-48 bg-white border-b border-gray-100 flex items-center justify-center p-8 group-hover:bg-gray-50 transition-colors duration-300">
              <div class="absolute top-4 left-4 z-10">
                <span class="px-3 py-1 bg-safety text-white text-xs font-heading font-semibold rounded-full shadow-sm">{{ i18n.t('proj.badge') }}</span>
              </div>
              <img [src]="project.logo" [alt]="i18n.t(project.titleKey)" 
                   class="max-h-24 max-w-[70%] object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-105">
            </div>
            <div class="p-6">
              <h3 class="text-lg font-heading font-bold text-navy mb-3">{{ i18n.t(project.titleKey) }}</h3>
              <p class="text-sm text-steel font-body leading-relaxed mb-4">{{ i18n.t(project.scopeKey) }}</p>
              <div class="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div class="flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span class="text-xs font-heading font-semibold text-navy">{{ project.value }}</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span class="text-xs font-heading font-semibold text-navy">{{ project.duration }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects = [
    { titleKey: 'proj.1.title', scopeKey: 'proj.1.scope', value: 'R$ 8M+', duration: '12 meses', logo: 'images/assets/logo-empresas/ball.png' },
    { titleKey: 'proj.2.title', scopeKey: 'proj.2.scope', value: 'R$ 12M+', duration: '18 meses', logo: 'images/assets/logo-empresas/ipiranga.png' },
    { titleKey: 'proj.3.title', scopeKey: 'proj.3.scope', value: 'R$ 5M+', duration: '8 meses', logo: 'images/assets/logo-empresas/vibra.png' },
  ];
  constructor(public i18n: I18nService) { }
}
