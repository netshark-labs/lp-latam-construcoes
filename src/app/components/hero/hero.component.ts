import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative flex flex-col justify-center min-h-[100svh] md:h-screen md:min-h-[600px] md:max-h-[900px] overflow-hidden diagonal-cut">
      <!-- Static Factory Background Image -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 image-placeholder transform -scale-x-100"
             style="background: url('images/assets/1.jpg') center/cover no-repeat;">
        </div>
      </div>

      <!-- Gradient Overlay (Darker and blurred for legibility) -->
      <div class="absolute inset-0 z-20 bg-gradient-to-b from-navy/80 via-navy/70 to-navy-dark/90 md:backdrop-blur-sm"></div>

      <!-- Blueprint Grid -->
      <div class="absolute inset-0 z-20 blueprint-grid opacity-30"></div>

      <!-- Content -->
      <div class="relative z-30 pt-28 pb-40 md:py-0 w-full flex-grow flex items-center">
        <div class="section-container w-full">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-safety/30 bg-safety/10">
              <span class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-safety animate-pulse"></span>
              <span class="text-safety text-[10px] md:text-xs font-heading font-semibold uppercase tracking-widest">{{ i18n.t('hero.tag') }}</span>
            </div>

            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight md:leading-[1.1] mb-5 md:mb-6">
              {{ i18n.t('hero.h1.1') }}<br>
              <span class="text-safety">{{ i18n.t('hero.h1.2') }}</span><br>
              {{ i18n.t('hero.h1.3') }}
            </h1>

            <p class="text-sm sm:text-base md:text-xl text-white/80 font-body max-w-2xl mb-8 md:mb-10 leading-relaxed">
              {{ i18n.t('hero.sub') }}
            </p>

            <div class="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
              <a href="#contact" class="btn-primary text-sm md:text-base justify-center flex items-center px-6 py-3.5">
                <svg class="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                {{ i18n.t('hero.cta1') }}
              </a>
              <a href="#contact" class="btn-secondary text-sm md:text-base !text-white !border-white/30 hover:!bg-white/10 hover:!border-white justify-center flex items-center px-6 py-3.5">
                <svg class="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                {{ i18n.t('hero.cta2') }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Metrics Strip -->
      <div class="absolute bottom-0 left-0 right-0 z-30">
        <div class="bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <div class="section-container py-4 md:py-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 md:gap-8">
              <div class="text-center">
                <span class="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-safety">+10</span>
                <p class="text-steel text-[10px] sm:text-xs md:text-sm font-body mt-0.5 md:mt-1">{{ i18n.t('hero.years') }}</p>
              </div>
              <div class="text-center">
                <span class="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-safety">+3500</span>
                <p class="text-steel text-[10px] sm:text-xs md:text-sm font-body mt-0.5 md:mt-1">{{ i18n.t('hero.tons') }}</p>
              </div>
              <div class="text-center">
                <span class="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-safety">+5000</span>
                <p class="text-steel text-[10px] sm:text-xs md:text-sm font-body mt-0.5 md:mt-1">{{ i18n.t('hero.welds') }}</p>
              </div>
              <div class="text-center">
                <span class="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-safety">2</span>
                <p class="text-steel text-[10px] sm:text-xs md:text-sm font-body mt-0.5 md:mt-1">{{ i18n.t('hero.countries') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  constructor(public i18n: I18nService) { }
}
