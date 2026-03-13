import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-client-trust',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-16 md:py-20 bg-white border-b border-gray-100">
      <div class="section-container">
        <div class="text-center mb-12">
          <p class="text-sm font-heading font-semibold text-safety uppercase tracking-widest mb-3">{{ i18n.t('trust.tag') }}</p>
          <h2 class="text-2xl md:text-3xl font-heading font-bold text-navy">{{ i18n.t('trust.title') }}</h2>
        </div>
        <div class="overflow-hidden relative">
          <div class="flex animate-logo-scroll hover:[animation-play-state:paused]" style="width: max-content;">
            <ng-container *ngFor="let set of [1, 2]">
              <div *ngFor="let client of clients"
                   class="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-24 w-32 md:w-40 transition-all duration-300 group cursor-pointer">
                <img [src]="client.img" [alt]="client.name" 
                     class="max-w-full max-h-16 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </ng-container>
          </div>
          <div class="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div class="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  `
})
export class ClientTrustComponent {
  clients = [
    { name: 'Petrobras', img: 'images/assets/logo-empresas/petrobras.png' },
    { name: 'Vibra', img: 'images/assets/logo-empresas/vibra.png' },
    { name: 'Ipiranga', img: 'images/assets/logo-empresas/ipiranga.png' },
    { name: 'BRF', img: 'images/assets/logo-empresas/brf.png' },
    { name: 'Ball Corporation', img: 'images/assets/logo-empresas/ball.png' },
    { name: 'Crown', img: 'images/assets/logo-empresas/crown.png' },
    { name: 'Ardagh', img: 'images/assets/logo-empresas/ardagh.png' }
  ];
  constructor(public i18n: I18nService) { }
}
