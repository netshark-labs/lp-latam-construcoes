import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
    selector: 'app-delivery-reports',
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <section class="py-20 md:py-28 bg-light relative">
      <div class="section-container">
        <div class="text-center mb-16 reveal">
          <p class="text-sm font-heading font-semibold text-safety uppercase tracking-widest mb-3">{{ i18n.t('reports.tag') }}</p>
          <h2 class="section-heading">{{ i18n.t('reports.title') }}</h2>
          <p class="section-subheading mx-auto">{{ i18n.t('reports.sub') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Diário de Obra -->
          <div class="group reveal">
            <div class="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div class="h-52 bg-gradient-to-br from-navy/5 to-navy/10 flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 opacity-10"
                     style="background-image: repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(15,42,68,0.15) 19px, rgba(15,42,68,0.15) 20px),
                                               repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(15,42,68,0.15) 19px, rgba(15,42,68,0.15) 20px);"></div>
                <!-- Mock document -->
                <div class="w-32 bg-white rounded shadow-lg p-3 transform group-hover:scale-105 transition-transform duration-500">
                  <div class="h-2 w-20 bg-navy/20 rounded mb-2"></div>
                  <div class="h-1.5 w-full bg-gray-100 rounded mb-1"></div>
                  <div class="h-1.5 w-full bg-gray-100 rounded mb-1"></div>
                  <div class="h-1.5 w-3/4 bg-gray-100 rounded mb-2"></div>
                  <div class="grid grid-cols-4 gap-0.5 mb-2">
                    <div class="h-3 bg-safety/20 rounded-sm"></div>
                    <div class="h-3 bg-navy/10 rounded-sm"></div>
                    <div class="h-3 bg-navy/10 rounded-sm"></div>
                    <div class="h-3 bg-navy/10 rounded-sm"></div>
                  </div>
                  <div class="h-1.5 w-full bg-gray-100 rounded mb-1"></div>
                  <div class="h-1.5 w-2/3 bg-gray-100 rounded"></div>
                </div>
              </div>
              <div class="p-6">
                <div class="w-10 h-10 rounded-lg bg-safety/10 flex items-center justify-center mb-4">
                  <svg class="w-5 h-5 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <h3 class="text-lg font-heading font-bold text-navy mb-2 group-hover:text-safety transition-colors">{{ i18n.t('reports.1.title') }}</h3>
                <p class="text-sm text-steel font-body leading-relaxed">{{ i18n.t('reports.1.desc') }}</p>
              </div>
            </div>
          </div>

          <!-- Curva S -->
          <div class="group reveal" style="transition-delay: 100ms">
            <div class="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div class="h-52 bg-gradient-to-br from-navy/5 to-navy/10 flex items-center justify-center relative overflow-hidden p-6">
                <!-- Mock S-Curve chart -->
                <svg viewBox="0 0 120 80" class="w-full max-w-[160px] transform group-hover:scale-105 transition-transform duration-500">
                  <rect width="120" height="80" rx="4" fill="white" stroke="#e5e7eb" stroke-width="0.5"/>
                  <!-- Grid lines -->
                  <line x1="20" y1="10" x2="20" y2="70" stroke="#f0f0f0" stroke-width="0.5"/>
                  <line x1="20" y1="70" x2="115" y2="70" stroke="#e0e0e0" stroke-width="0.5"/>
                  <line x1="20" y1="50" x2="115" y2="50" stroke="#f5f5f5" stroke-width="0.3"/>
                  <line x1="20" y1="30" x2="115" y2="30" stroke="#f5f5f5" stroke-width="0.3"/>
                  <!-- Planned line (blue) -->
                  <path d="M20,68 Q45,65 60,50 Q75,35 90,22 Q100,17 110,15" fill="none" stroke="#0F2A44" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.5"/>
                  <!-- Actual line (orange) -->
                  <path d="M20,68 Q40,66 55,55 Q70,42 85,30 Q95,24 105,20" fill="none" stroke="#F26419" stroke-width="2"/>
                  <!-- Legend dots -->
                  <circle cx="30" cy="8" r="2" fill="#0F2A44" opacity="0.5"/>
                  <circle cx="70" cy="8" r="2" fill="#F26419"/>
                </svg>
              </div>
              <div class="p-6">
                <div class="w-10 h-10 rounded-lg bg-safety/10 flex items-center justify-center mb-4">
                  <svg class="w-5 h-5 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>
                </div>
                <h3 class="text-lg font-heading font-bold text-navy mb-2 group-hover:text-safety transition-colors">{{ i18n.t('reports.2.title') }}</h3>
                <p class="text-sm text-steel font-body leading-relaxed">{{ i18n.t('reports.2.desc') }}</p>
              </div>
            </div>
          </div>

          <!-- Relatório Executivo -->
          <div class="group reveal" style="transition-delay: 200ms">
            <div class="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div class="h-52 bg-gradient-to-br from-navy/5 to-navy/10 flex items-center justify-center relative overflow-hidden p-6">
                <!-- Mock Dashboard -->
                <div class="w-40 bg-white rounded shadow-lg p-3 transform group-hover:scale-105 transition-transform duration-500">
                  <div class="h-1.5 w-16 bg-navy/20 rounded mb-2"></div>
                  <div class="grid grid-cols-2 gap-1.5 mb-2">
                    <div class="h-8 bg-safety/15 rounded-sm flex items-center justify-center">
                      <div class="w-4 h-4 rounded-full border-2 border-safety"></div>
                    </div>
                    <div class="h-8 bg-navy/5 rounded-sm flex items-center justify-center">
                      <div class="flex gap-0.5">
                        <div class="w-1 h-3 bg-navy/20 rounded-sm"></div>
                        <div class="w-1 h-5 bg-safety/40 rounded-sm"></div>
                        <div class="w-1 h-4 bg-navy/20 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  <div class="h-1 w-full bg-gray-100 rounded mb-1"></div>
                  <div class="h-1 w-3/4 bg-gray-100 rounded mb-2"></div>
                  <div class="flex gap-1">
                    <div class="h-2 flex-1 bg-green-100 rounded-sm"></div>
                    <div class="h-2 flex-1 bg-safety/20 rounded-sm"></div>
                    <div class="h-2 flex-1 bg-navy/10 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <div class="w-10 h-10 rounded-lg bg-safety/10 flex items-center justify-center mb-4">
                  <svg class="w-5 h-5 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                </div>
                <h3 class="text-lg font-heading font-bold text-navy mb-2 group-hover:text-safety transition-colors">{{ i18n.t('reports.3.title') }}</h3>
                <p class="text-sm text-steel font-body leading-relaxed">{{ i18n.t('reports.3.desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class DeliveryReportsComponent {
    constructor(public i18n: I18nService) { }
}
