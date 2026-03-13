import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <footer class="bg-white pt-16 pb-8 relative border-t border-gray-100">
      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <!-- Company -->
          <div>
            <div class="flex items-center gap-3 mb-4">
              <img src="images/assets/logo-latam.png" alt="LATAM Construções" class="h-10 md:h-12 w-auto">
            </div>
            <p class="text-steel/80 text-sm font-body leading-relaxed">
              {{ i18n.t('footer.tagline') }}
            </p>
          </div>

          <!-- Services -->
          <div>
            <h4 class="text-navy font-heading font-semibold text-sm mb-4 uppercase tracking-wider">{{ i18n.t('footer.services') }}</h4>
            <ul class="space-y-2">
              <li><a href="#services" class="text-steel/80 hover:text-safety text-sm font-body transition-colors">{{ i18n.t('svc.1.title') }}</a></li>
              <li><a href="#services" class="text-steel/80 hover:text-safety text-sm font-body transition-colors">{{ i18n.t('svc.2.title') }}</a></li>
              <li><a href="#services" class="text-steel/80 hover:text-safety text-sm font-body transition-colors">{{ i18n.t('svc.3.title') }}</a></li>
              <li><a href="#services" class="text-steel/80 hover:text-safety text-sm font-body transition-colors">{{ i18n.t('svc.4.title') }}</a></li>
              <li><a href="#services" class="text-steel/80 hover:text-safety text-sm font-body transition-colors">{{ i18n.t('svc.5.title') }}</a></li>
            </ul>
          </div>

          <!-- Company Links -->
          <div>
            <h4 class="text-navy font-heading font-semibold text-sm mb-4 uppercase tracking-wider">{{ i18n.t('footer.company') }}</h4>
            <ul class="space-y-2">
              <li><a href="#about" class="text-steel/80 hover:text-safety text-sm font-body transition-colors">{{ i18n.t('footer.about') }}</a></li>
              <li><a href="#projects" class="text-steel/80 hover:text-safety text-sm font-body transition-colors">{{ i18n.t('footer.projects') }}</a></li>
              <li><a href="#safety" class="text-steel/80 hover:text-safety text-sm font-body transition-colors">{{ i18n.t('footer.safety') }}</a></li>
              <li><a href="#contact" class="text-steel/80 hover:text-safety text-sm font-body transition-colors">{{ i18n.t('footer.contact') }}</a></li>
            </ul>
          </div>

          <!-- Locations -->
          <div>
            <h4 class="text-navy font-heading font-semibold text-sm mb-4 uppercase tracking-wider">{{ i18n.t('footer.operations') }}</h4>
            <ul class="space-y-3">
              <li class="flex items-start gap-2 text-steel/80 text-sm font-body">
                <svg class="w-5 h-3.5 rounded-sm flex-shrink-0 mt-0.5" viewBox="0 0 20 14"><rect width="20" height="14" fill="#009739"/><polygon points="10,1 19,7 10,13 1,7" fill="#FEDD00"/><circle cx="10" cy="7" r="3" fill="#012169"/></svg>
                <div>
                  <span class="text-navy font-semibold block text-xs">Headquarters — RJ</span>
                  <span class="text-xs">Pça XV de Novembro, 20 – Centro</span>
                </div>
              </li>
              <li class="flex items-start gap-2 text-steel/80 text-sm font-body">
                <svg class="w-5 h-3.5 rounded-sm flex-shrink-0 mt-0.5" viewBox="0 0 20 14"><rect width="20" height="14" fill="#009739"/><polygon points="10,1 19,7 10,13 1,7" fill="#FEDD00"/><circle cx="10" cy="7" r="3" fill="#012169"/></svg>
                <div>
                  <span class="text-navy font-semibold block text-xs">Galpão — SP</span>
                  <span class="text-xs">R. Carlos A. Altimari, 71 – Penápolis</span>
                </div>
              </li>
              <li class="flex items-start gap-2 text-steel/80 text-sm font-body">
                <svg class="w-5 h-3.5 rounded-sm flex-shrink-0 mt-0.5" viewBox="0 0 20 14"><rect width="20" height="4.67" fill="#D32F2F"/><rect y="4.67" width="20" height="4.67" fill="#FFFFFF"/><rect y="9.33" width="20" height="4.67" fill="#1565C0"/></svg>
                <div>
                  <span class="text-navy font-semibold block text-xs">LATAM Services S.A. — PY</span>
                  <span class="text-xs">Av. Aviadores Del Chaco, 2.351 – Assunción</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom -->
        <div class="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-steel/70 text-xs font-body">
            &copy; {{ currentYear }} LATAM Construções e Montagens Industriais LTDA. {{ i18n.t('footer.rights') }}
          </p>
          <div class="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/latam-engenharia-73a835371/" target="_blank" rel="noopener noreferrer" class="text-steel/50 hover:text-safety transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" class="text-steel/50 hover:text-safety transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
    currentYear = new Date().getFullYear();
    constructor(public i18n: I18nService) { }
}
