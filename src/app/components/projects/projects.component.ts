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
          
          <!-- Parceria Comercial Card -->
          <div class="industrial-card overflow-hidden reveal bg-white border border-gray-100 shadow-lg md:col-span-2 lg:col-span-3 flex flex-col lg:flex-row" style="transition-delay: 450ms;">
            <!-- Carrossel de Imagens Aclive -->
            <div class="relative w-full lg:w-1/3 min-h-[300px] lg:min-h-[400px] bg-navy border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col items-center justify-center overflow-hidden">
              <div class="absolute top-4 left-4 z-20">
                <span class="px-3 py-1 bg-navy/90 text-white text-xs font-heading font-semibold rounded-full shadow-md backdrop-blur-sm">{{ i18n.t('part.badge') }}</span>
              </div>
              
              <!-- Imagens -->
              <ng-container *ngFor="let img of acliveImages; let imgIdx = index">
                <img [src]="img" 
                     class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-0"
                     [ngClass]="{'opacity-100': imgIdx === currentAcliveImgIndex, 'opacity-0': imgIdx !== currentAcliveImgIndex}"
                     alt="Aclive Elevadores">
              </ng-container>
              
              <!-- Overlay gradiente inferior para destacar os dots -->
              <div class="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent z-10 pointer-events-none"></div>

              <!-- Indicadores do Carrossel -->
              <div class="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                <button *ngFor="let img of acliveImages; let imgIdx = index" 
                        (click)="setAcliveImage(imgIdx)"
                        class="w-2 h-2 rounded-full transition-all duration-300"
                        [ngClass]="imgIdx === currentAcliveImgIndex ? 'bg-safety w-6' : 'bg-white/50 hover:bg-white/80'"></button>
              </div>
            </div>
            
            <!-- Conteúdo -->
            <div class="p-6 md:p-8 w-full lg:w-2/3 flex flex-col justify-center">
              <h3 class="text-xl md:text-2xl font-heading font-bold text-navy mb-2">{{ i18n.t('part.title') }}</h3>
              <p class="text-sm text-steel font-body leading-relaxed mb-6">{{ i18n.t('part.desc') }}</p>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Soluções -->
                <div>
                  <h4 class="text-xs font-heading font-bold text-navy uppercase tracking-wider mb-3 pb-2 border-b border-gray-100">{{ i18n.t('part.sol.title') }}</h4>
                  <ul class="text-xs text-steel space-y-2 font-body">
                    <li class="flex items-start gap-2"><svg class="w-3.5 h-3.5 text-safety mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>{{ i18n.t('part.sol.1') }}</span></li>
                    <li class="flex items-start gap-2"><svg class="w-3.5 h-3.5 text-safety mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>{{ i18n.t('part.sol.2') }}</span></li>
                    <li class="flex items-start gap-2"><svg class="w-3.5 h-3.5 text-safety mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>{{ i18n.t('part.sol.3') }}</span></li>
                    <li class="flex items-start gap-2"><svg class="w-3.5 h-3.5 text-safety mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>{{ i18n.t('part.sol.4') }}</span></li>
                    <li class="flex items-start gap-2"><svg class="w-3.5 h-3.5 text-safety mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>{{ i18n.t('part.sol.5') }}</span></li>
                  </ul>
                </div>
                
                <!-- Diferenciais -->
                <div>
                  <h4 class="text-xs font-heading font-bold text-navy uppercase tracking-wider mb-3 pb-2 border-b border-gray-100">{{ i18n.t('part.dif.title') }}</h4>
                  <ul class="text-xs text-steel space-y-2 font-body">
                    <li class="flex items-start gap-2"><svg class="w-3.5 h-3.5 text-safety mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>{{ i18n.t('part.dif.1') }}</span></li>
                    <li class="flex items-start gap-2"><svg class="w-3.5 h-3.5 text-safety mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>{{ i18n.t('part.dif.2') }}</span></li>
                    <li class="flex items-start gap-2"><svg class="w-3.5 h-3.5 text-safety mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>{{ i18n.t('part.dif.3') }}</span></li>
                    <li class="flex items-start gap-2"><svg class="w-3.5 h-3.5 text-safety mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>{{ i18n.t('part.dif.4') }}</span></li>
                  </ul>
                </div>
                
                <!-- Serviços Adicionais -->
                <div>
                  <h4 class="text-xs font-heading font-bold text-navy uppercase tracking-wider mb-3 pb-2 border-b border-gray-100">{{ i18n.t('part.svc.title') }}</h4>
                  <ul class="text-xs text-steel space-y-2 font-body">
                    <li class="flex items-start gap-2"><svg class="w-3.5 h-3.5 text-safety mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>{{ i18n.t('part.svc.1') }}</span></li>
                    <li class="flex items-start gap-2"><svg class="w-3.5 h-3.5 text-safety mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>{{ i18n.t('part.svc.2') }}</span></li>
                    <li class="flex items-start gap-2"><svg class="w-3.5 h-3.5 text-safety mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>{{ i18n.t('part.svc.3') }}</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects = [
    { titleKey: 'proj.1.title', scopeKey: 'proj.1.scope', value: 'R$ 8M+', duration: '12 meses', logo: 'images/assets/logo-empresas/ball.png' },
    { titleKey: 'proj.2.title', scopeKey: 'proj.2.scope', value: 'R$ 12M+', duration: '18 meses', logo: 'images/assets/logo-empresas/ipiranga.png' },
    { titleKey: 'proj.3.title', scopeKey: 'proj.3.scope', value: 'R$ 5M+', duration: '8 meses', logo: 'images/assets/logo-empresas/vibra.png' },
  ];
  
  acliveImages = [
    'images/assets/aclive/5.jpg',
    'images/assets/aclive/2.jpg',
    'images/assets/aclive/1.jpg',
    'images/assets/aclive/3.jpg',
    'images/assets/aclive/4.jpg'
  ];
  currentAcliveImgIndex = 0;
  private acliveInterval: any;

  constructor(
    public i18n: I18nService, 
    private cdr: ChangeDetectorRef, 
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAcliveInterval();
    }
  }

  ngOnDestroy() {
    if (this.acliveInterval) clearInterval(this.acliveInterval);
  }

  startAcliveInterval() {
    if (this.acliveInterval) clearInterval(this.acliveInterval);
    this.acliveInterval = setInterval(() => {
      this.currentAcliveImgIndex = (this.currentAcliveImgIndex + 1) % this.acliveImages.length;
      this.cdr.markForCheck();
    }, 4000);
  }

  setAcliveImage(index: number) {
    this.currentAcliveImgIndex = index;
    if (isPlatformBrowser(this.platformId)) {
      this.startAcliveInterval(); // Restart interval on manual change
    }
  }
}
