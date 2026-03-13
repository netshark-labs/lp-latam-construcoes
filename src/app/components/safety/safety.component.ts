import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-safety',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="safety" class="py-20 md:py-28 bg-light relative overflow-hidden">
      <div class="absolute inset-0 blueprint-grid opacity-20"></div>
      <div class="section-container relative z-10">
        <div class="text-center mb-16 reveal">
          <p class="text-sm font-heading font-semibold text-safety uppercase tracking-widest mb-3">{{ i18n.t('safe.tag') }}</p>
          <h2 class="section-heading">{{ i18n.t('safe.title') }}</h2>
          <p class="section-subheading mx-auto">{{ i18n.t('safe.sub') }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center p-8 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-safety/30 transition-all duration-500 group reveal">
            <div class="w-16 h-16 mx-auto mb-5 rounded-full bg-safety/10 flex items-center justify-center group-hover:bg-safety/20 group-hover:scale-110 transition-all duration-300">
              <svg class="w-8 h-8 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 class="text-lg font-heading font-bold text-navy mb-2 group-hover:text-safety transition-colors">NR-10</h3>
            <p class="text-sm text-steel font-body leading-relaxed">{{ i18n.t('safe.nr10.desc') }}</p>
          </div>
          <div class="text-center p-8 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-safety/30 transition-all duration-500 group reveal" style="transition-delay:100ms">
            <div class="w-16 h-16 mx-auto mb-5 rounded-full bg-safety/10 flex items-center justify-center group-hover:bg-safety/20 group-hover:scale-110 transition-all duration-300">
              <svg class="w-8 h-8 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <h3 class="text-lg font-heading font-bold text-navy mb-2 group-hover:text-safety transition-colors">NR-13</h3>
            <p class="text-sm text-steel font-body leading-relaxed">{{ i18n.t('safe.nr13.desc') }}</p>
          </div>
          <div class="text-center p-8 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-safety/30 transition-all duration-500 group reveal" style="transition-delay:200ms">
            <div class="w-16 h-16 mx-auto mb-5 rounded-full bg-safety/10 flex items-center justify-center group-hover:bg-safety/20 group-hover:scale-110 transition-all duration-300">
              <svg class="w-8 h-8 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <h3 class="text-lg font-heading font-bold text-navy mb-2 group-hover:text-safety transition-colors">{{ i18n.t('safe.culture') }}</h3>
            <p class="text-sm text-steel font-body leading-relaxed">{{ i18n.t('safe.culture.desc') }}</p>
          </div>
          <div class="text-center p-8 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-safety/30 transition-all duration-500 group reveal" style="transition-delay:300ms">
            <div class="w-16 h-16 mx-auto mb-5 rounded-full bg-safety/10 flex items-center justify-center group-hover:bg-safety/20 group-hover:scale-110 transition-all duration-300">
              <svg class="w-8 h-8 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
            </div>
            <h3 class="text-lg font-heading font-bold text-navy mb-2 group-hover:text-safety transition-colors">{{ i18n.t('safe.qa') }}</h3>
            <p class="text-sm text-steel font-body leading-relaxed">{{ i18n.t('safe.qa.desc') }}</p>
          </div>
        </div>
        <div class="mt-16 p-8 rounded-2xl bg-white border border-gray-200 shadow-sm reveal">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div class="text-3xl font-heading font-bold text-safety">0</div><p class="text-steel text-sm font-body mt-1">{{ i18n.t('safe.lti') }}</p></div>
            <div><div class="text-3xl font-heading font-bold text-safety">100%</div><p class="text-steel text-sm font-body mt-1">{{ i18n.t('safe.compliance') }}</p></div>
            <div><div class="text-3xl font-heading font-bold text-safety">NR-10</div><p class="text-steel text-sm font-body mt-1">{{ i18n.t('safe.electrical') }}</p></div>
            <div><div class="text-3xl font-heading font-bold text-safety">NR-13</div><p class="text-steel text-sm font-body mt-1">{{ i18n.t('safe.boilers') }}</p></div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SafetyComponent {
  constructor(public i18n: I18nService) { }
}
