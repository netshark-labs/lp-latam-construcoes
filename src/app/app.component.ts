import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ClientTrustComponent } from './components/client-trust/client-trust.component';
import { ServicesComponent } from './components/services/services.component';
import { ExecutionScaleComponent } from './components/execution-scale/execution-scale.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SafetyComponent } from './components/safety/safety.component';
import { OperationsMapComponent } from './components/operations-map/operations-map.component';
import { ProjectManagementComponent } from './components/project-management/project-management.component';
import { DeliveryReportsComponent } from './components/delivery-reports/delivery-reports.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { I18nService } from './services/i18n.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PreloaderComponent,
    HeaderComponent,
    HeroComponent,
    ClientTrustComponent,
    ServicesComponent,
    ExecutionScaleComponent,
    ProjectsComponent,
    SafetyComponent,
    OperationsMapComponent,
    ProjectManagementComponent,
    DeliveryReportsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-preloader></app-preloader>
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-client-trust></app-client-trust>
      <app-services></app-services>
      <app-execution-scale></app-execution-scale>
      <app-projects></app-projects>
      <app-safety></app-safety>
      <app-operations-map></app-operations-map>
      <app-project-management></app-project-management>
      <app-delivery-reports></app-delivery-reports>
      <app-about></app-about>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>

    <a *ngIf="showFloatingCta" href="#contact" class="floating-cta">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
      <span class="hidden sm:inline">{{ i18n.t('float.cta') }}</span>
    </a>
  `,
  styles: [`:host { display: block; }`]
})
export class AppComponent implements OnInit, OnDestroy {
  showFloatingCta = false;
  private isBrowser: boolean;
  private scrollHandler: (() => void) | null = null;
  private observer: IntersectionObserver | null = null;
  private ticking = false;

  constructor(
    public i18n: I18nService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // Set initial language
      this.i18n.setLang('pt');

      // Floating CTA visibility
      this.scrollHandler = () => {
        if (!this.ticking) {
          this.ticking = true;
          requestAnimationFrame(() => {
            const show = window.scrollY > window.innerHeight;
            if (show !== this.showFloatingCta) {
              this.showFloatingCta = show;
              this.cdr.markForCheck();
            }
            this.ticking = false;
          });
        }
      };
      window.addEventListener('scroll', this.scrollHandler, { passive: true });

      // Scroll Reveal Observer
      this.observer = new IntersectionObserver(
        (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); }),
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      setTimeout(() => {
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => this.observer?.observe(el));
      }, 100);
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      if (this.scrollHandler) window.removeEventListener('scroll', this.scrollHandler);
      this.observer?.disconnect();
    }
  }
}
