import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" class="py-20 md:py-28 bg-light relative">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Text Content -->
          <div class="reveal">
            <p class="text-sm font-heading font-semibold text-safety uppercase tracking-widest mb-3">{{ i18n.t('about.tag') }}</p>
            <h2 class="section-heading">{{ i18n.t('about.title') }}</h2>
            <p class="text-steel font-body leading-relaxed mb-6">{{ i18n.t('about.p1') }}</p>
            <p class="text-steel font-body leading-relaxed mb-8">{{ i18n.t('about.p2') }}</p>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 rounded-lg bg-white border border-gray-100">
                <div class="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center mb-3">
                  <svg class="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                </div>
                <h4 class="text-sm font-heading font-bold text-navy">{{ i18n.t('about.pillar1') }}</h4>
              </div>
              <div class="p-4 rounded-lg bg-white border border-gray-100">
                <div class="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center mb-3">
                  <svg class="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                </div>
                <h4 class="text-sm font-heading font-bold text-navy">{{ i18n.t('about.pillar2') }}</h4>
              </div>
              <div class="p-4 rounded-lg bg-white border border-gray-100">
                <div class="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center mb-3">
                  <svg class="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </div>
                <h4 class="text-sm font-heading font-bold text-navy">{{ i18n.t('about.pillar3') }}</h4>
              </div>
              <div class="p-4 rounded-lg bg-white border border-gray-100">
                <div class="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center mb-3">
                  <svg class="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <h4 class="text-sm font-heading font-bold text-navy">{{ i18n.t('about.pillar4') }}</h4>
              </div>
            </div>
          </div>
          <!-- Image Placeholder -->
          <div class="relative reveal-right">
            <div class="rounded-2xl overflow-hidden shadow-2xl">
              <div class="h-80 md:h-96 image-placeholder"
                   style="background: url('images/assets/2.jpg') center/cover no-repeat;">
              </div>
            </div>
            <div class="absolute -bottom-4 -left-4 w-24 h-24 rounded-xl bg-safety/10 -z-10"></div>
            <div class="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-navy/10 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  constructor(public i18n: I18nService) { }
}
