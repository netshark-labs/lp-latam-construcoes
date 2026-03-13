import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, PLATFORM_ID, Inject, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
    selector: 'app-execution-scale',
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <section id="scale" class="py-20 md:py-28 bg-gray-50 relative overflow-hidden blueprint-grid">
      <div class="absolute top-0 left-0 w-full h-20 bg-white" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 0);"></div>
      <div class="section-container relative z-10">
        <div class="text-center mb-16 reveal">
          <p class="text-sm font-heading font-semibold text-safety uppercase tracking-widest mb-3">{{ i18n.t('scale.tag') }}</p>
          <h2 class="section-heading">{{ i18n.t('scale.title') }}</h2>
          <p class="section-subheading mx-auto">{{ i18n.t('scale.sub') }}</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          <div *ngFor="let c of counterItems; let idx = index"
               class="text-center p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-safety/30 transition-all duration-500 group reveal"
               [style.transition-delay.ms]="idx * 100">
            <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-safety/10 flex items-center justify-center group-hover:bg-safety/20 transition-colors duration-300">
              <svg *ngIf="idx===0" class="w-7 h-7 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              <svg *ngIf="idx===1" class="w-7 h-7 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="8" width="4" height="8" rx="0.5" stroke-width="2"/><rect x="16" y="8" width="4" height="8" rx="0.5" stroke-width="2"/><line x1="8" y1="11" x2="16" y2="11" stroke-width="2"/><line x1="8" y1="13" x2="16" y2="13" stroke-width="2"/></svg>
              <svg *ngIf="idx===2" class="w-7 h-7 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              <svg *ngIf="idx===3" class="w-7 h-7 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
              <svg *ngIf="idx===4" class="w-7 h-7 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="text-3xl md:text-4xl font-heading font-bold text-safety mb-2">{{ c.prefix }}{{ c.current | number:'1.0-0' }}{{ c.suffix }}</div>
            <p class="text-steel text-sm font-body">{{ i18n.t(c.labelKey) }}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExecutionScaleComponent implements OnInit, OnDestroy {
    private observer: IntersectionObserver | null = null;
    private isBrowser: boolean;
    private animated = false;

    counterItems = [
        { value: 3500, prefix: '+', suffix: '', labelKey: 'scale.steel', current: 0 },
        { value: 30, prefix: '+', suffix: ' km', labelKey: 'scale.pipe', current: 0 },
        { value: 5000, prefix: '+', suffix: '', labelKey: 'scale.welds', current: 0 },
        { value: 6, prefix: '+', suffix: ' km', labelKey: 'scale.elect', current: 0 },
        { value: 20, prefix: 'R$', suffix: 'M+', labelKey: 'scale.value', current: 0 },
    ];

    constructor(public i18n: I18nService, private cdr: ChangeDetectorRef, private el: ElementRef, @Inject(PLATFORM_ID) pid: Object) {
        this.isBrowser = isPlatformBrowser(pid);
    }

    ngOnInit(): void {
        if (this.isBrowser) {
            this.observer = new IntersectionObserver(entries => {
                entries.forEach(e => { if (e.isIntersecting && !this.animated) { this.animated = true; this.animate(); } });
            }, { threshold: 0.3 });
            this.observer.observe(this.el.nativeElement);
        }
    }
    ngOnDestroy(): void { this.observer?.disconnect(); }

    private animate(): void {
        const dur = 2000, steps = 60, iv = dur / steps;
        this.counterItems.forEach(c => {
            let s = 0;
            const t = setInterval(() => {
                s++;
                c.current = Math.round(c.value * (1 - Math.pow(1 - s / steps, 3)));
                this.cdr.markForCheck();
                if (s >= steps) { c.current = c.value; clearInterval(t); this.cdr.markForCheck(); }
            }, iv);
        });
    }
}
