import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { I18nService, Lang } from '../../services/i18n.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Scroll Progress Bar -->
    <div class="scroll-progress" [style.width.%]="scrollProgress"></div>

    <header class="fixed top-0 left-0 w-full z-[100] transition-all duration-300"
            [class.bg-white]="scrolled"
            [class.shadow-md]="scrolled"
            [class.bg-transparent]="!scrolled">
      <div class="section-container">
        <div class="flex items-center justify-between h-16 md:h-20">
          <!-- Logo -->
          <a href="#" class="flex items-center gap-3 group">
            <img src="images/assets/logo-latam.png" alt="LATAM Construções"
                 class="w-auto transition-all duration-300 group-hover:scale-105"
                 [ngClass]="!scrolled ? 'h-10 md:h-12 brightness-0 invert' : 'h-10 md:h-12'">
          </a>

          <!-- Desktop Nav -->
          <nav class="hidden lg:flex items-center gap-6">
            <a href="#services" class="text-sm font-body font-medium transition-colors duration-200 relative group"
               [ngClass]="scrolled ? 'text-navy hover:text-safety' : 'text-white/90 hover:text-white'">
              {{ i18n.t('nav.services') }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-safety transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" class="text-sm font-body font-medium transition-colors duration-200 relative group"
               [ngClass]="scrolled ? 'text-navy hover:text-safety' : 'text-white/90 hover:text-white'">
              {{ i18n.t('nav.projects') }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-safety transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#scale" class="text-sm font-body font-medium transition-colors duration-200 relative group"
               [ngClass]="scrolled ? 'text-navy hover:text-safety' : 'text-white/90 hover:text-white'">
              {{ i18n.t('nav.capabilities') }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-safety transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#safety" class="text-sm font-body font-medium transition-colors duration-200 relative group"
               [ngClass]="scrolled ? 'text-navy hover:text-safety' : 'text-white/90 hover:text-white'">
              {{ i18n.t('nav.safety') }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-safety transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" class="text-sm font-body font-medium transition-colors duration-200 relative group"
               [ngClass]="scrolled ? 'text-navy hover:text-safety' : 'text-white/90 hover:text-white'">
              {{ i18n.t('nav.about') }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-safety transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" class="text-sm font-body font-medium transition-colors duration-200 relative group"
               [ngClass]="scrolled ? 'text-navy hover:text-safety' : 'text-white/90 hover:text-white'">
              {{ i18n.t('nav.contact') }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-safety transition-all duration-300 group-hover:w-full"></span>
            </a>

            <div class="relative ml-2">
              <button (click)="toggleLangMenu()" class="flex items-center gap-1.5 text-sm font-body transition-colors px-2 py-1 rounded border"
                      [ngClass]="scrolled ? 'text-navy border-gray-300 hover:bg-gray-50' : 'text-white/90 border-white/20 hover:bg-white/10'">
                <ng-container [ngSwitch]="i18n.currentLang()">
                  <svg *ngSwitchCase="'pt'" class="w-5 h-3.5 rounded-sm overflow-hidden" viewBox="0 0 20 14"><rect width="20" height="14" fill="#009739"/><polygon points="10,1 19,7 10,13 1,7" fill="#FEDD00"/><circle cx="10" cy="7" r="3" fill="#012169"/></svg>
                  <svg *ngSwitchCase="'es'" class="w-5 h-3.5 rounded-sm overflow-hidden" viewBox="0 0 20 14"><rect width="20" height="4.67" fill="#D32F2F"/><rect y="4.67" width="20" height="4.67" fill="#FFFFFF"/><rect y="9.33" width="20" height="4.67" fill="#1565C0"/></svg>
                  <svg *ngSwitchDefault class="w-5 h-3.5 rounded-sm overflow-hidden" viewBox="0 0 20 14"><rect width="20" height="14" fill="#B22234"/><rect y="2" width="20" height="2" fill="white"/><rect y="6" width="20" height="2" fill="white"/><rect y="10" width="20" height="2" fill="white"/><rect width="8" height="7" fill="#3C3B6E"/></svg>
                </ng-container>
                <span class="text-xs uppercase font-semibold">{{ i18n.currentLang() }}</span>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div *ngIf="langMenuOpen" class="absolute top-full right-0 mt-2 bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden min-w-[160px]">
                <button *ngFor="let lang of i18n.langs"
                        (click)="selectLang(lang.code)"
                        class="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors font-body"
                        [ngClass]="lang.code === i18n.currentLang() ? 'text-safety bg-gray-50 font-semibold' : 'text-navy hover:bg-gray-50'">
                  <ng-container [ngSwitch]="lang.flagId">
                    <svg *ngSwitchCase="'br'" class="w-5 h-3.5 rounded-sm flex-shrink-0" viewBox="0 0 20 14"><rect width="20" height="14" fill="#009739"/><polygon points="10,1 19,7 10,13 1,7" fill="#FEDD00"/><circle cx="10" cy="7" r="3" fill="#012169"/></svg>
                    <svg *ngSwitchCase="'py'" class="w-5 h-3.5 rounded-sm flex-shrink-0" viewBox="0 0 20 14"><rect width="20" height="4.67" fill="#D32F2F"/><rect y="4.67" width="20" height="4.67" fill="#FFFFFF"/><rect y="9.33" width="20" height="4.67" fill="#1565C0"/></svg>
                    <svg *ngSwitchDefault class="w-5 h-3.5 rounded-sm flex-shrink-0" viewBox="0 0 20 14"><rect width="20" height="14" fill="#B22234"/><rect y="2" width="20" height="2" fill="white"/><rect y="6" width="20" height="2" fill="white"/><rect y="10" width="20" height="2" fill="white"/><rect width="8" height="7" fill="#3C3B6E"/></svg>
                  </ng-container>
                  <span>{{ lang.label }}</span>
                </button>
              </div>
            </div>

            <a href="#contact" class="btn-primary text-xs py-2.5 px-5">{{ i18n.t('nav.request') }}</a>
          </nav>

          <!-- Mobile: Lang + Hamburger -->
          <div class="lg:hidden flex items-center gap-2">
            <div class="relative">
              <button (click)="toggleLangMenu()" class="flex items-center gap-1.5 text-sm px-2 py-1 rounded border transition-colors"
                      [ngClass]="scrolled ? 'text-navy border-gray-300' : 'text-white/90 border-white/20'">
                <ng-container [ngSwitch]="i18n.currentLang()">
                  <svg *ngSwitchCase="'pt'" class="w-5 h-3.5 rounded-sm" viewBox="0 0 20 14"><rect width="20" height="14" fill="#009739"/><polygon points="10,1 19,7 10,13 1,7" fill="#FEDD00"/><circle cx="10" cy="7" r="3" fill="#012169"/></svg>
                  <svg *ngSwitchCase="'es'" class="w-5 h-3.5 rounded-sm" viewBox="0 0 20 14"><rect width="20" height="4.67" fill="#D32F2F"/><rect y="4.67" width="20" height="4.67" fill="#FFFFFF"/><rect y="9.33" width="20" height="4.67" fill="#1565C0"/></svg>
                  <svg *ngSwitchDefault class="w-5 h-3.5 rounded-sm" viewBox="0 0 20 14"><rect width="20" height="14" fill="#B22234"/><rect y="2" width="20" height="2" fill="white"/><rect y="6" width="20" height="2" fill="white"/><rect y="10" width="20" height="2" fill="white"/><rect width="8" height="7" fill="#3C3B6E"/></svg>
                </ng-container>
                <span class="text-xs uppercase font-semibold">{{ i18n.currentLang() }}</span>
              </button>
              <div *ngIf="langMenuOpen" class="absolute top-full right-0 mt-2 bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden min-w-[160px] z-50">
                <button *ngFor="let lang of i18n.langs"
                        (click)="selectLang(lang.code)"
                        class="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors font-body"
                        [ngClass]="lang.code === i18n.currentLang() ? 'text-safety bg-gray-50' : 'text-navy hover:bg-gray-50'">
                  <ng-container [ngSwitch]="lang.flagId">
                    <svg *ngSwitchCase="'br'" class="w-5 h-3.5 rounded-sm flex-shrink-0" viewBox="0 0 20 14"><rect width="20" height="14" fill="#009739"/><polygon points="10,1 19,7 10,13 1,7" fill="#FEDD00"/><circle cx="10" cy="7" r="3" fill="#012169"/></svg>
                    <svg *ngSwitchCase="'py'" class="w-5 h-3.5 rounded-sm flex-shrink-0" viewBox="0 0 20 14"><rect width="20" height="4.67" fill="#D32F2F"/><rect y="4.67" width="20" height="4.67" fill="#FFFFFF"/><rect y="9.33" width="20" height="4.67" fill="#1565C0"/></svg>
                    <svg *ngSwitchDefault class="w-5 h-3.5 rounded-sm flex-shrink-0" viewBox="0 0 20 14"><rect width="20" height="14" fill="#B22234"/><rect y="2" width="20" height="2" fill="white"/><rect y="6" width="20" height="2" fill="white"/><rect y="10" width="20" height="2" fill="white"/><rect width="8" height="7" fill="#3C3B6E"/></svg>
                  </ng-container>
                  <span>{{ lang.label }}</span>
                </button>
              </div>
            </div>

            <button class="p-2 transition-colors" [class.text-navy]="scrolled" [class.text-white]="!scrolled" (click)="toggleMenu()">
              <svg *ngIf="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg *ngIf="menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div *ngIf="menuOpen" class="lg:hidden bg-white border-t border-gray-100 shadow-xl">
        <div class="section-container py-4">
          <a href="#services" (click)="closeMenu()" class="block py-3 text-navy hover:text-safety text-sm font-body font-medium transition-colors border-b border-gray-50">{{ i18n.t('nav.services') }}</a>
          <a href="#projects" (click)="closeMenu()" class="block py-3 text-navy hover:text-safety text-sm font-body font-medium transition-colors border-b border-gray-50">{{ i18n.t('nav.projects') }}</a>
          <a href="#scale" (click)="closeMenu()" class="block py-3 text-navy hover:text-safety text-sm font-body font-medium transition-colors border-b border-gray-50">{{ i18n.t('nav.capabilities') }}</a>
          <a href="#safety" (click)="closeMenu()" class="block py-3 text-navy hover:text-safety text-sm font-body font-medium transition-colors border-b border-gray-50">{{ i18n.t('nav.safety') }}</a>
          <a href="#about" (click)="closeMenu()" class="block py-3 text-navy hover:text-safety text-sm font-body font-medium transition-colors border-b border-gray-50">{{ i18n.t('nav.about') }}</a>
          <a href="#contact" (click)="closeMenu()" class="block py-3 text-navy hover:text-safety text-sm font-body font-medium transition-colors border-b border-gray-50">{{ i18n.t('nav.contact') }}</a>
          <a href="#contact" (click)="closeMenu()" class="btn-primary w-full mt-4 text-center text-xs py-3">{{ i18n.t('nav.request') }}</a>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent implements OnInit, OnDestroy {
  scrolled = false;
  scrollProgress = 0;
  menuOpen = false;
  langMenuOpen = false;
  private isBrowser: boolean;
  private scrollHandler: (() => void) | null = null;
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
      this.scrollHandler = () => {
        if (!this.ticking) {
          this.ticking = true;
          requestAnimationFrame(() => { this.onScroll(); this.ticking = false; });
        }
      };
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser && this.scrollHandler) window.removeEventListener('scroll', this.scrollHandler);
  }

  private onScroll(): void {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrolled = scrollTop > 50;
    this.scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    this.cdr.markForCheck();
  }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; this.langMenuOpen = false; this.cdr.markForCheck(); }
  closeMenu(): void { this.menuOpen = false; this.cdr.markForCheck(); }
  toggleLangMenu(): void { this.langMenuOpen = !this.langMenuOpen; this.cdr.markForCheck(); }
  selectLang(code: Lang): void { this.i18n.setLang(code); this.langMenuOpen = false; this.cdr.markForCheck(); }
}
