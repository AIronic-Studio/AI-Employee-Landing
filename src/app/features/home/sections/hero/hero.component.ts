import { Component, signal, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  template: `
    <section class="hero">
      <!-- Animated background -->
      <div class="hero-bg">
        <div class="hero-orb hero-orb--1"></div>
        <div class="hero-orb hero-orb--2"></div>
        <div class="hero-grid"></div>
      </div>

      <div class="container hero-container">
        <div class="hero-content">
          <!-- Badge -->
          <div class="badge badge--primary hero-badge animate-fade-up">
            <span class="badge-dot"></span>
            Software House · Polska
          </div>

          <!-- Headline -->
          <h1 class="text-hero hero-headline">
            Software szyty na miarę<br>
            <span class="gradient-text">w rozsądnych pieniądzach</span>
          </h1>

          <!-- Subheadline -->
          <p class="text-lead hero-sub">
            Jesteśmy małym software house'em dla małych i średnich firm. Budujemy aplikacje webowe,
            panele, automatyzacje i integracje dopasowane do tego, jak naprawdę pracujesz — bez korporacyjnych stawek.
          </p>

          <!-- Industry pills -->
          <div class="industry-pills">
            @for (ind of industries(); track ind.id) {
              <button
                class="industry-pill"
                [class.active]="activeIndustry() === ind.id"
                (click)="activeIndustry.set(ind.id)">
                {{ ind.icon }} {{ ind.name }}
              </button>
            }
          </div>

          <!-- Dynamic industry value prop -->
          <div class="industry-value">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            {{ currentIndustryProp() }}
          </div>

          <!-- CTAs -->
          <div class="hero-ctas">
            <a routerLink="/kontakt" class="btn btn--primary btn--lg">
              Umów bezpłatną konsultację
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a [routerLink]="['/']" fragment="projekty" class="btn btn--ghost btn--lg">
              Zobacz nasze projekty →
            </a>
          </div>

          <!-- Trust line -->
          <p class="hero-trust">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Bez umów na rok · Kod i dokumentacja na własność · Wycena przed startem
          </p>
        </div>

        <!-- Hero visual -->
        <div class="hero-visual">
          <div class="dashboard-mock animate-float">
            <div class="mock-header">
              <div class="mock-dots">
                <span></span><span></span><span></span>
              </div>
              <span class="mock-title">Panel firmy — Twój system</span>
            </div>
            <div class="mock-body">
              <div class="mock-stat">
                <span class="mock-stat-label">Zlecenia w toku</span>
                <span class="mock-stat-value accent">128</span>
              </div>
              <div class="mock-stat">
                <span class="mock-stat-label">Przychód w tym miesiącu</span>
                <span class="mock-stat-value">184 200 PLN</span>
              </div>
              <div class="mock-stat">
                <span class="mock-stat-label">Faktury opłacone</span>
                <span class="mock-stat-value accent">96%</span>
              </div>
              <div class="mock-chart">
                <div class="chart-bar" style="height:30%"></div>
                <div class="chart-bar" style="height:50%"></div>
                <div class="chart-bar" style="height:40%"></div>
                <div class="chart-bar" style="height:70%"></div>
                <div class="chart-bar" style="height:60%"></div>
                <div class="chart-bar active" style="height:90%"></div>
              </div>
              <div class="mock-automations">
                <div class="automation-item">
                  <div class="automation-icon">🧩</div>
                  <div>
                    <div class="automation-name">Moduł zamówień</div>
                    <div class="automation-runs">wdrożony</div>
                  </div>
                  <div class="automation-status">✓</div>
                </div>
                <div class="automation-item">
                  <div class="automation-icon">📊</div>
                  <div>
                    <div class="automation-name">Raport dzienny</div>
                    <div class="automation-runs">automatyzacja</div>
                  </div>
                  <div class="automation-status">✓</div>
                </div>
                <div class="automation-item">
                  <div class="automation-icon">🧾</div>
                  <div>
                    <div class="automation-name">Integracja ERP ↔ sklep</div>
                    <div class="automation-runs">synchronizacja</div>
                  </div>
                  <div class="automation-status running">↻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 100px 0 60px;
      overflow: hidden;
    }

    /* Background */
    .hero-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    .hero-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      opacity: 0.25;
    }
    .hero-orb--1 {
      width: 700px; height: 700px;
      background: var(--color-primary);
      top: -200px; left: -200px;
      animation: float 12s ease-in-out infinite;
    }
    .hero-orb--2 {
      width: 500px; height: 500px;
      background: var(--color-accent);
      bottom: -100px; right: -100px;
      animation: float 15s ease-in-out infinite reverse;
      opacity: 0.15;
    }
    .hero-grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent);
    }

    /* Layout */
    .hero-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-3xl);
      align-items: center;
      position: relative;
      z-index: 1;
    }

    /* Content */
    .hero-content {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
    }

    .hero-badge {
      width: fit-content;
      animation: fadeInUp 0.6s ease forwards;
    }
    .badge-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--color-primary);
      animation: pulse-glow 2s infinite;
    }

    .hero-headline {
      animation: fadeInUp 0.7s 0.1s ease forwards;
      opacity: 0;
    }

    .hero-sub {
      animation: fadeInUp 0.7s 0.2s ease forwards;
      opacity: 0;
      max-width: 480px;
    }

    /* Industry pills */
    .industry-pills {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);
      animation: fadeInUp 0.7s 0.3s ease forwards;
      opacity: 0;
    }
    .industry-pill {
      padding: 6px 14px;
      border-radius: var(--radius-pill);
      border: 1px solid var(--color-surface-border);
      background: var(--color-surface);
      color: var(--color-text-muted);
      font-size: 0.8rem;
      font-weight: 500;
      transition: all var(--transition-base);
    }
    .industry-pill:hover,
    .industry-pill.active {
      border-color: var(--color-primary);
      color: var(--color-primary);
      background: rgba(124, 92, 252, 0.08);
    }

    .industry-value {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9rem;
      color: var(--color-text-muted);
      font-style: italic;
      animation: fadeInUp 0.7s 0.35s ease forwards;
      opacity: 0;
      min-height: 24px;
      transition: opacity 0.3s;
    }

    .hero-ctas {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-md);
      animation: fadeInUp 0.7s 0.4s ease forwards;
      opacity: 0;
    }

    .hero-trust {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.8rem;
      color: var(--color-text-dim);
      animation: fadeInUp 0.7s 0.5s ease forwards;
      opacity: 0;
    }

    /* Dashboard mock */
    .hero-visual {
      display: flex;
      justify-content: center;
      animation: fadeInUp 0.9s 0.3s ease forwards;
      opacity: 0;
    }

    .dashboard-mock {
      background: var(--color-surface);
      border: 1px solid var(--color-surface-border);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-card), 0 0 80px rgba(124, 92, 252, 0.08);
      width: 100%;
      max-width: 400px;
      overflow: hidden;
    }

    .mock-header {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      padding: 14px 16px;
      border-bottom: 1px solid var(--color-surface-border);
      background: var(--color-surface-2);
    }
    .mock-dots { display: flex; gap: 6px; }
    .mock-dots span {
      width: 10px; height: 10px;
      border-radius: 50%;
      background: var(--color-surface-border);
    }
    .mock-dots span:nth-child(1) { background: #FF5F57; }
    .mock-dots span:nth-child(2) { background: #FFBD2E; }
    .mock-dots span:nth-child(3) { background: #28C840; }
    .mock-title { font-size: 0.8rem; color: var(--color-text-muted); }

    .mock-body { padding: 20px; display: flex; flex-direction: column; gap: 16px; }

    .mock-stat {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 14px;
      background: var(--color-bg);
      border-radius: var(--radius-sm);
    }
    .mock-stat-label { font-size: 0.75rem; color: var(--color-text-muted); }
    .mock-stat-value { font-size: 0.95rem; font-weight: 700; }
    .mock-stat-value.accent { color: var(--color-accent); }

    .mock-chart {
      display: flex;
      align-items: flex-end;
      gap: 6px;
      height: 60px;
      padding: 8px;
      background: var(--color-bg);
      border-radius: var(--radius-sm);
    }
    .chart-bar {
      flex: 1;
      background: var(--color-surface-2);
      border-radius: 3px 3px 0 0;
      transition: height 1s ease;
    }
    .chart-bar.active { background: var(--color-primary); box-shadow: 0 0 12px var(--color-primary-glow); }

    .mock-automations { display: flex; flex-direction: column; gap: 8px; }
    .automation-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      background: var(--color-bg);
      border-radius: var(--radius-sm);
    }
    .automation-icon { font-size: 1.1rem; }
    .automation-name { font-size: 0.8rem; font-weight: 500; }
    .automation-runs { font-size: 0.7rem; color: var(--color-text-muted); }
    .automation-status {
      margin-left: auto;
      font-size: 0.75rem;
      color: var(--color-accent);
      font-weight: 600;
    }
    .automation-status.running {
      color: var(--color-primary);
      animation: spin 1.5s linear infinite;
      display: inline-block;
    }

    @media (max-width: 900px) {
      .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .hero-sub, .hero-trust, .industry-value { margin: 0 auto; }
      .hero-ctas, .industry-pills { justify-content: center; }
      .hero-visual { display: none; }
    }
  `]
})
export class HeroComponent {
  private platformId = inject(PLATFORM_ID);

  industries = signal([
    { id: 'ecommerce', name: 'E-commerce', icon: '🛒' },
    { id: 'logistics', name: 'Logistyka', icon: '🚛' },
    { id: 'manufacturing', name: 'Produkcja', icon: '🏭' },
    { id: 'services', name: 'Usługi B2B', icon: '💼' },
    { id: 'fintech', name: 'Fintech', icon: '💳' },
  ]);

  activeIndustry = signal('ecommerce');

  industryProps: Record<string, string> = {
    ecommerce: 'Panele do obsługi zamówień i zwrotów, integracje sklepu z magazynem i księgowością',
    logistics: 'Systemy do planowania tras, śledzenia przesyłek i raportowania w jednym miejscu',
    manufacturing: 'Aplikacje do planowania produkcji, kontroli jakości i zamówień surowców',
    services: 'Portale klienta, systemy ofertowe i CRM dopasowany do Twojego procesu sprzedaży',
    fintech: 'Onboarding klientów, panele operacyjne i automatyzacja raportów regulacyjnych',
  };

  currentIndustryProp() {
    return this.industryProps[this.activeIndustry()];
  }
}
