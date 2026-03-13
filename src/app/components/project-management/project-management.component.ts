import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-project-management',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-20 md:py-28 bg-white relative">
      <div class="section-container">
        <div class="text-center mb-16 reveal">
          <p class="text-sm font-heading font-semibold text-safety uppercase tracking-widest mb-3">{{ i18n.t('pm.tag') }}</p>
          <h2 class="section-heading">{{ i18n.t('pm.title') }}</h2>
          <p class="section-subheading mx-auto">{{ i18n.t('pm.sub') }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let item of items; let idx = index"
               class="p-6 rounded-xl border border-gray-100 bg-white hover:border-safety/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group reveal"
               [style.transition-delay.ms]="idx * 80">
            <div class="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-safety/10 transition-colors duration-300">
              <svg *ngIf="idx===0" class="w-6 h-6 text-navy group-hover:text-safety transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              <svg *ngIf="idx===1" class="w-6 h-6 text-navy group-hover:text-safety transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              <svg *ngIf="idx===2" class="w-6 h-6 text-navy group-hover:text-safety transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <svg *ngIf="idx===3" class="w-6 h-6 text-navy group-hover:text-safety transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>
              <svg *ngIf="idx===4" class="w-6 h-6 text-navy group-hover:text-safety transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <svg *ngIf="idx===5" class="w-6 h-6 text-navy group-hover:text-safety transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>
            </div>
            <h3 class="text-base font-heading font-bold text-navy mb-2 group-hover:text-safety transition-colors">{{ i18n.t(item.titleKey) }}</h3>
            <p class="text-sm text-steel font-body leading-relaxed">{{ i18n.t(item.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectManagementComponent {
  items = [
    { titleKey: 'pm.1.title', descKey: 'pm.1.desc' },
    { titleKey: 'pm.2.title', descKey: 'pm.2.desc' },
    { titleKey: 'pm.3.title', descKey: 'pm.3.desc' },
    { titleKey: 'pm.4.title', descKey: 'pm.4.desc' },
    { titleKey: 'pm.5.title', descKey: 'pm.5.desc' },
    { titleKey: 'pm.6.title', descKey: 'pm.6.desc' },
  ];
  constructor(public i18n: I18nService) { }
}
