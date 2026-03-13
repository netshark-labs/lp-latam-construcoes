import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
      .modal-enter { animation: modalEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      .backdrop-enter { animation: backdropEnter 0.3s ease-out forwards; }
      @keyframes modalEnter {
        0% { opacity: 0; transform: scale(0.95) translateY(15px); }
        100% { opacity: 1; transform: scale(1) translateY(0); }
      }
      @keyframes backdropEnter {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      /* Smooth scrollbar for modal */
      .modal-scroll::-webkit-scrollbar { width: 6px; }
      .modal-scroll::-webkit-scrollbar-track { background: transparent; }
      .modal-scroll::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 10px; }
    `],
    template: `
    <section id="services" class="py-20 md:py-28 bg-light blueprint-grid relative">
      <!-- Modal Overlay -->
      <div *ngIf="selectedSvc" class="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-navy-dark/95 backdrop-blur-sm backdrop-enter" (click)="closeModal()"></div>
        
        <!-- Modal Content -->
        <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] md:max-h-[80vh] overflow-y-auto overscroll-contain flex flex-col modal-enter modal-scroll">
          <button (click)="closeModal()" class="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full text-navy transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          
          <div class="p-6 md:p-8">
            <h3 class="text-2xl font-heading font-bold text-navy mb-2">{{ i18n.t(selectedSvc.titleKey) }}</h3>
            <p class="text-steel font-body mb-6">{{ i18n.t(selectedSvc.descKey) }}</p>
            
            <!-- Default Single Image view if no specifics -->
            <div *ngIf="!selectedSvc.details" class="w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
              <img *ngIf="selectedSvc.img" [src]="selectedSvc.img" class="w-full h-full object-cover">
              <span *ngIf="!selectedSvc.img" class="text-gray-400 font-body">Mais detalhes em breve...</span>
            </div>

            <!-- Detailed Revamp Slides -->
            <div *ngIf="selectedSvc.details" class="space-y-8">
              <div *ngFor="let detail of selectedSvc.details; let idx = index" class="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                <!-- Image side: Using bg-black to make small images fit better -->
                <div class="w-full md:w-2/5 bg-navy-dark flex items-center justify-center p-4">
                  <img [src]="detail.img" class="max-w-full max-h-64 object-contain shadow-md">
                </div>
                <!-- Content side -->
                <div class="w-full md:w-3/5 p-6">
                  <div class="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
                    <div *ngIf="detail.valor"><span class="text-xs text-steel uppercase font-bold">Valor</span><p class="text-safety font-heading font-semibold">{{detail.valor}}</p></div>
                    <div *ngIf="detail.volume"><span class="text-xs text-steel uppercase font-bold">Volume</span><p class="text-navy font-heading font-semibold">{{detail.volume}}</p></div>
                    <div *ngIf="detail.tempo"><span class="text-xs text-steel uppercase font-bold">Tempo</span><p class="text-navy font-heading font-semibold">{{detail.tempo}}</p></div>
                    <div *ngIf="detail.funcionarios"><span class="text-xs text-steel uppercase font-bold">Equipe</span><p class="text-navy font-body text-sm">{{detail.funcionarios}}</p></div>
                  </div>
                  <ul class="space-y-2 text-sm text-steel font-body">
                    <li *ngFor="let item of detail.bullets" class="flex items-start">
                      <svg class="w-4 h-4 text-safety mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                      <span>{{item}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="section-container">
        <div class="text-center mb-16 reveal">
          <p class="text-sm font-heading font-semibold text-safety uppercase tracking-widest mb-3">{{ i18n.t('svc.tag') }}</p>
          <h2 class="section-heading">{{ i18n.t('svc.title') }}</h2>
          <p class="section-subheading mx-auto">{{ i18n.t('svc.sub') }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div *ngFor="let svc of svcKeys; let idx = index"
               (click)="openModal(svc)"
               class="industrial-card overflow-hidden group reveal cursor-pointer transform hover:-translate-y-3 hover:scale-[1.02] shadow-md hover:shadow-2xl transition-all duration-300 ring-2 ring-transparent hover:ring-safety/50"
               [style.transition-delay.ms]="idx * 100">
            <div class="h-48 md:h-56 bg-navy overflow-hidden relative">
              <!-- Background Image -->
              <img *ngIf="svc.img" [src]="svc.img" [alt]="i18n.t(svc.titleKey)"
                   class="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110">
                   
              <!-- Gradient Overlay (Darker if no image, subtle if image exists) -->
              <div class="absolute inset-0 transition-all duration-500 z-10 flex items-center justify-center"
                   [ngClass]="svc.img ? 'bg-gradient-to-t from-navy-dark/90 via-navy/50 to-navy/10 group-hover:via-navy/30' : 'bg-gradient-to-br from-navy/80 to-navy-dark/60 group-hover:from-navy/60 group-hover:to-navy-dark/40'">
                
                <!-- Icons (Smaller and moved slightly if image is present) -->
                <div [class.transform]="true" [class.-translate-y-2]="!!svc.img" class="transition-transform duration-500 group-hover:-translate-y-4">
                  <svg *ngIf="idx===0" class="w-14 h-14 text-white/90 transform transition-all duration-500 group-hover:scale-110 group-hover:text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  <svg *ngIf="idx===1" class="w-14 h-14 text-white/90 transform transition-all duration-500 group-hover:scale-110 group-hover:text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <svg *ngIf="idx===2" class="w-14 h-14 text-white/90 transform transition-all duration-500 group-hover:scale-110 group-hover:text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                  <svg *ngIf="idx===3" class="w-14 h-14 text-white/90 transform transition-all duration-500 group-hover:scale-110 group-hover:text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="8" width="4" height="8" rx="0.5" stroke-width="1.5"/><rect x="16" y="8" width="4" height="8" rx="0.5" stroke-width="1.5"/><line x1="8" y1="11" x2="16" y2="11" stroke-width="1.5"/><line x1="8" y1="13" x2="16" y2="13" stroke-width="1.5"/></svg>
                  <svg *ngIf="idx===4" class="w-14 h-14 text-white/90 transform transition-all duration-500 group-hover:scale-110 group-hover:text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
                  <svg *ngIf="idx===5" class="w-14 h-14 text-white/90 transform transition-all duration-500 group-hover:scale-110 group-hover:text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-heading font-bold text-navy mb-3 group-hover:text-safety transition-colors duration-300">{{ i18n.t(svc.titleKey) }}</h3>
              <p class="text-sm text-steel font-body leading-relaxed">{{ i18n.t(svc.descKey) }}</p>
              <div class="mt-4 flex items-center text-safety text-sm font-heading font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {{ i18n.t('svc.more') }}
                <svg class="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
    selectedSvc: any = null;

    svcKeys = [
        { 
          titleKey: 'svc.1.title', 
          descKey: 'svc.1.desc', 
          img: 'images/assets/revamp/revamp-card.jpg',
          details: [
            {
              img: 'images/assets/oque-fazemos/instalacoes-industriais/i1.png',
              valor: 'R$ 10,2 M', tempo: '12 meses', funcionarios: '49 diretos',
              bullets: [
                'Integração e instalação de equipamentos industriais, tubulações de processo e sistemas elétricos',
                'Gerentes, coordenadores, supervisores, projetistas, técnico de segurança e equipe de montagem eletromecânica',
                '260 Ton em montagem de equipamentos de processo industrial',
                '30 Ton em montagem de tubulações industriais',
                '6 km lançamento de cabos elétricos e infraestrutura (conduítes e berços)',
                'R$ 1,0 M em compras de suprimentos para o projeto',
                '2.000 juntas soldadas'
              ]
            }
          ]
        },
        { 
          titleKey: 'svc.2.title', 
          descKey: 'svc.2.desc', 
          img: 'images/assets/oque-fazemos/montagem-mecanica/m1.jpeg',
          details: [
            {
              img: 'images/assets/oque-fazemos/montagem-mecanica/m1.jpeg',
              valor: 'R$ 20,2 M', tempo: '12 meses', funcionarios: '220 diretos',
              bullets: [
                'Montagem de equipamentos e estruturas industriais em projetos greenfield',
                'Management team, coordenadores, supervisores, projetistas, técnico de segurança e equipe de montagem',
                '3.500 Ton em montagem de estruturas metálicas',
                'Montagem de tubulações industriais de ½” até 16” (>30 km)',
                '6 km lançamento de cabos elétricos e infraestrutura',
                'R$ 10,0 M em compras de suprimentos',
                '5.000 juntas soldadas',
                'Suporte ao comissionamento e partida'
              ]
            }
          ]
        },
        { 
          titleKey: 'svc.3.title', 
          descKey: 'svc.3.desc', 
          img: 'images/assets/revamp/r3.jpg',
          details: [
            {
              img: 'images/assets/revamp/r1.jpg',
              valor: 'R$ 2,0 M', volume: '2.200 m3', tempo: '4 meses', funcionarios: '9 diretos',
              bullets: [
                'Coordenador, supervisores, téc. segurança, mecânica e pintura',
                'Troca de selo de vedação e reparo de teto flutuante',
                'Substituições de poceto, troca de chapas do fundo e teto do tanque, solda de rodo de tanque (100%)',
                'Substituição 100% de guarda-corpo e corrimão de escada',
                'Teste Hidrostático, inspeções em soldas de fundo e rodo de tanque; relatórios RQPS, EPS, NR13',
                'Pintura interna e externa do tanque, aplicação de elastômero'
              ]
            },
            {
              img: 'images/assets/revamp/r2.jpg',
              valor: 'R$ 1,7 M', volume: '1.500 m3', tempo: '2 meses', funcionarios: '6 diretos',
              bullets: [
                'Coordenador, téc. segurança, montagem mecânica e pintura',
                'Montagem interna de andaime multidirecional para pintura interna 100% costado e teto',
                'Troca de chapas do fundo e teto do tanque, solda de rodo de tanque (100%)',
                'Substituição 100% de guarda-corpo e corrimão de escada, adequando à norma',
                'Teste Hidrostático, inspeções em soldas de fundo e rodo de tanque; relatórios RQPS, EPS, NR13',
                'Pintura interna e externa do tanque, aplicação de elastômero'
              ]
            },
            {
              img: 'images/assets/revamp/r3.jpg',
              valor: 'R$ 1,0 M', volume: '150 m3', tempo: '3 meses', funcionarios: '8 diretos',
              bullets: [
                'Coordenador, téc. segurança, montagem mecânica, solda e pintura',
                'Tratamento e pintura de tubulações ao redor do tanque',
                'Troca de chapas do fundo e teto do tanque, solda de rodo de tanque (100%)',
                'Substituição 100% de guarda-corpo e corrimão de escada',
                'Teste Hidrostático, inspeções em soldas de fundo e rodo de tanque; relatórios RQPS, EPS, NR13',
                'Pintura interna e externa do tanque, aplicação de elastômero'
              ]
            }
          ]
        },
        { 
          titleKey: 'svc.6.title', 
          descKey: 'svc.6.desc', 
          img: 'images/assets/oque-fazemos/funcionarios/b1.jpeg',
          details: [
            {
              img: 'images/assets/oque-fazemos/funcionarios/b1.jpeg',
              valor: 'USD 120 mil', tempo: '3 meses', funcionarios: '3 diretos',
              bullets: [
                'Consultoria técnica para montagem industrial, suporte à implantação de unidades produtivas e definição de soluções',
                'Coordenadores e supervisores técnicos',
                'Consultoria para montagem industrial',
                'Definição de detalhes de campo para instalação de equipamentos',
                'Suporte técnico para projetos e implantação',
                'Definição de fixações e espaçamentos de equipamentos',
                'Apoio técnico à execução de montagem industrial'
              ]
            }
          ]
        },
    ];
    
    constructor(public i18n: I18nService) { }

    openModal(svc: any) {
      this.selectedSvc = svc;
      document.body.style.overflow = 'hidden'; // prevent background scrolling
    }

    closeModal() {
      this.selectedSvc = null;
      document.body.style.overflow = 'auto';
    }
}
