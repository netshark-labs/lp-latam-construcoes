import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-preloader',
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div *ngIf="visible"
         class="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-navy transition-opacity duration-500"
         [class.opacity-0]="fadeOut"
         [class.pointer-events-none]="fadeOut">
      <!-- Animated Picture Background -->
      <div class="absolute inset-0 z-0 overflow-hidden bg-navy">
        <img src="images/assets/preload.png" alt="Background" class="w-full h-full object-cover opacity-20 mix-blend-screen animate-bg-zoom">
      </div>

      <!-- Blueprint Grid -->
      <div class="absolute inset-0 z-[1] blueprint-grid-dark opacity-30"></div>

      <!-- Logo / Company Name -->
      <div class="relative z-10 text-center">
        <h1 class="text-3xl md:text-4xl font-heading font-bold text-white tracking-wider mb-2 drop-shadow-lg">
          LATAM
        </h1>
        <p class="text-steel-light text-sm font-body tracking-[0.3em] uppercase drop-shadow-md">
          Construções e Montagens
        </p>
      </div>

      <!-- Blueprint Line Animation -->
      <div class="relative z-10 mt-10 w-64 md:w-80">
        <div class="h-[2px] bg-steel/30 rounded-full overflow-hidden">
          <div class="h-full bg-safety rounded-full animate-preloader-line"></div>
        </div>
      </div>

      <!-- Sparks Dots -->
      <div class="relative z-10 mt-6 flex gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-safety animate-pulse" style="animation-delay: 0s;"></span>
        <span class="w-1.5 h-1.5 rounded-full bg-safety animate-pulse" style="animation-delay: 0.2s;"></span>
        <span class="w-1.5 h-1.5 rounded-full bg-safety animate-pulse" style="animation-delay: 0.4s;"></span>
      </div>
    </div>
  `,
    styles: [`
    @keyframes slowZoom {
      0% { transform: scale(1); opacity: 0; }
      20% { opacity: 0.3; }
      100% { transform: scale(1.1); opacity: 0.15; }
    }
    .animate-bg-zoom {
      animation: slowZoom 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }
  `]
})
export class PreloaderComponent implements OnInit {
    visible = true;
    fadeOut = false;

    constructor(private cdr: ChangeDetectorRef) { }

    ngOnInit(): void {
        setTimeout(() => {
            this.fadeOut = true;
            this.cdr.markForCheck();
        }, 2000);
        setTimeout(() => {
            this.visible = false;
            this.cdr.markForCheck();
        }, 2500);
    }
}
