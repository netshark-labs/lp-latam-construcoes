import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-operations-map',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-20 md:py-28 bg-light blueprint-grid relative">
      <div class="section-container">
        <div class="text-center mb-16 reveal">
          <p class="text-sm font-heading font-semibold text-safety uppercase tracking-widest mb-3">{{ i18n.t('map.tag') }}</p>
          <h2 class="section-heading">{{ i18n.t('map.title') }}</h2>
          <p class="section-subheading mx-auto">{{ i18n.t('map.sub') }}</p>
        </div>
        <div class="max-w-4xl mx-auto reveal">
          <div class="relative bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden p-8 md:p-12 blueprint-grid opacity-90">
            <svg viewBox="0 0 400 500" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
              <!-- South America outline -->
              <path d="M200 40 L240 60 L270 80 L290 100 L300 120 L310 150 L300 180 L310 200 L320 230 L310 260 L300 290 L290 320 L270 350 L260 380 L240 400 L220 420 L200 440 L190 450 L180 440 L170 420 L160 400 L150 380 L140 350 L130 320 L120 300 L110 270 L105 240 L100 210 L110 180 L120 150 L130 120 L150 90 L170 70 L200 40Z"
                    fill="#F3F4F6" stroke="#D1D5DB" stroke-width="1.5"/>
              <!-- Brazil highlight -->
              <path d="M160 100 L220 90 L270 110 L300 150 L310 200 L300 250 L280 280 L250 300 L220 310 L190 300 L160 270 L140 230 L130 190 L140 150 L160 100Z"
                    fill="rgba(242,100,25,0.08)" stroke="rgba(242,100,25,0.3)" stroke-width="1"
                    class="transition-all duration-300 cursor-pointer"
                    [ngClass]="hoveredCountry === 'brazil' ? 'fill-safety/20 stroke-safety' : ''"
                    (mouseenter)="hoverCountry('brazil')" (mouseleave)="hoverCountry(null)"/>

              <!-- Brazil marker -->
              <g>
                <circle cx="220" cy="200" r="12" fill="none" stroke="#F26419" stroke-width="1" opacity="0.4">
                  <animate attributeName="r" values="8;16;8" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="220" cy="200" [attr.r]="hoveredCountry === 'brazil' ? 9 : 6" fill="#F26419" stroke="white" stroke-width="2"
                        class="cursor-pointer transition-all duration-300"
                        [ngClass]="hoveredCountry === 'brazil' ? 'fill-safety stroke-white' : ''" />
                <circle cx="220" cy="200" r="20" fill="transparent" class="cursor-pointer"
                        (mouseenter)="hoverCountry('brazil')" (mouseleave)="hoverCountry(null)" />
                <text x="234" y="205" font-size="12" font-family="Montserrat" font-weight="600"
                      [attr.fill]="hoveredCountry === 'brazil' ? '#F26419' : '#1F2937'" class="transition-all duration-300">{{ i18n.t('map.brazil') }}</text>
              </g>

              <!-- Paraguay marker -->
              <g>
                <circle cx="185" cy="290" r="12" fill="none" stroke="#F26419" stroke-width="1" opacity="0.4">
                  <animate attributeName="r" values="8;16;8" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="185" cy="290" [attr.r]="hoveredCountry === 'paraguay' ? 9 : 6" fill="#F26419" stroke="white" stroke-width="2"
                        class="cursor-pointer transition-all duration-300"
                        [ngClass]="hoveredCountry === 'paraguay' ? 'fill-safety stroke-white' : ''" />
                <circle cx="185" cy="290" r="20" fill="transparent" class="cursor-pointer"
                        (mouseenter)="hoverCountry('paraguay')" (mouseleave)="hoverCountry(null)" />
                <text x="199" y="295" font-size="12" font-family="Montserrat" font-weight="600"
                      [attr.fill]="hoveredCountry === 'paraguay' ? '#F26419' : '#1F2937'" class="transition-all duration-300">{{ i18n.t('map.paraguay') }}</text>
              </g>
            </svg>

            <!-- Country cards (2 only) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-lg mx-auto">
              <div class="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center transition-all duration-300 cursor-pointer"
                   [ngClass]="hoveredCountry === 'brazil' ? 'bg-safety/5 border-safety/30 shadow-sm' : ''"
                   (mouseenter)="hoverCountry('brazil')" (mouseleave)="hoverCountry(null)">
                <div class="mb-2">
                  <svg class="w-8 h-5 rounded-sm mx-auto shadow-sm" viewBox="0 0 20 14"><rect width="20" height="14" fill="#009739"/><polygon points="10,1 19,7 10,13 1,7" fill="#FEDD00"/><circle cx="10" cy="7" r="3" fill="#012169"/></svg>
                </div>
                <h4 class="text-navy font-heading font-semibold text-sm">{{ i18n.t('map.brazil') }}</h4>
                <p class="text-steel flex-shrink-0 text-xs font-body mt-1">{{ i18n.t('map.brazil.desc') }}</p>
              </div>
              <div class="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center transition-all duration-300 cursor-pointer"
                   [ngClass]="hoveredCountry === 'paraguay' ? 'bg-safety/5 border-safety/30 shadow-sm' : ''"
                   (mouseenter)="hoverCountry('paraguay')" (mouseleave)="hoverCountry(null)">
                <div class="mb-2">
                  <svg class="w-8 h-5 rounded-sm mx-auto shadow-sm" viewBox="0 0 20 14"><rect width="20" height="4.67" fill="#D32F2F"/><rect y="4.67" width="20" height="4.67" fill="#FFFFFF"/><rect y="9.33" width="20" height="4.67" fill="#1565C0"/></svg>
                </div>
                <h4 class="text-navy font-heading font-semibold text-sm">{{ i18n.t('map.paraguay') }}</h4>
                <p class="text-steel flex-shrink-0 text-xs font-body mt-1">{{ i18n.t('map.paraguay.desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class OperationsMapComponent {
  hoveredCountry: string | null = null;
  constructor(public i18n: I18nService, private cdr: ChangeDetectorRef) { }
  hoverCountry(id: string | null): void { this.hoveredCountry = id; this.cdr.markForCheck(); }
}
