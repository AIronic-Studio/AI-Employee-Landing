import { Component } from '@angular/core';

@Component({
  selector: 'app-packages',
  template: `
    <section class="section" id="wycena">
      <div class="container">
        <div class="section-header text-center" style="margin-bottom: var(--space-3xl)">
          <span class="section-label">Wycena</span>
          <h2 class="text-h2" style="margin: var(--space-md) 0">
            Cena dopasowana<br>do <span class="gradient-text">Twojego problemu</span>
          </h2>
          <p class="text-lead" style="max-width: 600px; margin: var(--space-md) auto 0">
            Rozsądne pieniądze to nie „najtaniej”, tylko uczciwie: płacisz za to, czego naprawdę potrzebujesz.
            Prosta automatyzacja to inna wycena niż panel dla całej firmy. Dlatego zaczynamy od bezpłatnej
            konsultacji, po której dostajesz konkretny zakres i cenę.
          </p>
        </div>

        <!-- Pricing philosophy cards -->
        <div class="pricing-grid">
          <div class="pricing-card">
            <div class="pricing-icon">🔍</div>
            <h3>Bezpłatna Konsultacja</h3>
            <p>
              Poznajemy Twoją firmę i problem, proponujemy rozwiązanie i szacujemy
              koszt oraz czas realizacji. Bez zobowiązań — rekomendacje dostajesz
              niezależnie od tego, czy zdecydujesz się na współpracę.
            </p>
            <ul class="pricing-features">
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Analiza potrzeb i obecnych narzędzi
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Propozycja rozwiązania i zakresu MVP
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Szacunkowa wycena i harmonogram
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                45-minutowa sesja Q&A
              </li>
            </ul>
            <div class="pricing-cta">
              <div class="price-tag free">Bezpłatny</div>
              <a href="https://aironicstudio.pl/kontakt" class="btn btn--primary" style="width:100%; justify-content: center; margin-top: var(--space-lg)">
                Umów bezpłatną konsultację →
              </a>
              <p class="pricing-note">Bez zobowiązań, bez karty kredytowej</p>
            </div>
          </div>

          <div class="pricing-card pricing-card--info">
            <div class="pricing-icon">💡</div>
            <h3>Dlaczego nie mamy stałego cennika?</h3>
            <p>
              Prosta automatyzacja to co innego niż panel dla całej firmy
              czy system zintegrowany z ERP i AI. Podawanie jednej ceny byłoby
              nieuczciwe — albo przepłacisz, albo dostaniesz niedoszacowaną wycenę.
            </p>

            <div class="complexity-list">
              <div class="complexity-item">
                <span class="complexity-dot low"></span>
                <div>
                  <strong>Automatyzacja / integracja</strong>
                  <span>np. raporty, powiadomienia, połączenie sklepu z księgowością</span>
                </div>
              </div>
              <div class="complexity-item">
                <span class="complexity-dot mid"></span>
                <div>
                  <strong>Panel lub aplikacja</strong>
                  <span>np. panel zamówień, portal klienta, CRM na miarę</span>
                </div>
              </div>
              <div class="complexity-item">
                <span class="complexity-dot high"></span>
                <div>
                  <strong>Większy system</strong>
                  <span>np. system dla całej firmy z integracjami i AI</span>
                </div>
              </div>
            </div>

            <p class="info-footer">
              Po konsultacji wiesz, ile to kosztuje i ile potrwa — zanim podejmiesz decyzję.
            </p>
          </div>
        </div>

        <div class="packages-footer text-center">
          <p class="text-muted" style="font-size: 0.9rem; margin-bottom: var(--space-md)">
            Masz już pomysł albo konkretny problem do rozwiązania?
          </p>
          <a href="https://aironicstudio.pl/kontakt" class="btn btn--accent">Umów konsultację i poznaj cenę →</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .pricing-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-lg);
      margin-bottom: var(--space-3xl);
    }

    .pricing-card {
      background: var(--color-surface);
      border: 1px solid var(--color-surface-border);
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
      transition: all var(--transition-base);
    }
    .pricing-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-card);
    }

    .pricing-card--info {
      background: linear-gradient(145deg, rgba(124, 92, 252, 0.06), var(--color-surface));
      border-color: rgba(124, 92, 252, 0.25);
    }

    .pricing-icon { font-size: 2rem; }
    .pricing-card h3 { font-size: 1.2rem; font-weight: 700; }
    .pricing-card p {
      font-size: 0.875rem;
      color: var(--color-text-muted);
      line-height: 1.65;
    }

    .pricing-features {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      flex: 1;
    }
    .pricing-features li {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 0.875rem;
      color: var(--color-text-muted);
      line-height: 1.5;
    }
    .pricing-features li svg { margin-top: 2px; flex-shrink: 0; }

    .pricing-cta { margin-top: auto; }

    .price-tag {
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -0.02em;
    }
    .price-tag.free { color: var(--color-accent); }

    .pricing-note {
      font-size: 0.78rem;
      color: var(--color-text-dim);
      text-align: center;
      margin-top: var(--space-sm);
    }

    /* Complexity list */
    .complexity-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      background: var(--color-bg);
      border-radius: var(--radius-md);
      padding: var(--space-lg);
    }
    .complexity-item {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      font-size: 0.875rem;
    }
    .complexity-item div { display: flex; flex-direction: column; gap: 2px; }
    .complexity-item strong { color: var(--color-text); font-weight: 600; }
    .complexity-item span { color: var(--color-text-muted); font-size: 0.8rem; }

    .complexity-dot {
      width: 12px; height: 12px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .complexity-dot.low { background: #4ade80; }
    .complexity-dot.mid { background: #facc15; }
    .complexity-dot.high { background: var(--color-primary); }

    .info-footer {
      font-size: 0.85rem;
      color: var(--color-primary);
      font-weight: 500;
      border-left: 2px solid var(--color-primary);
      padding-left: var(--space-md);
      margin-top: auto;
    }

    .packages-footer { padding-top: var(--space-xl); }

    @media (max-width: 768px) {
      .pricing-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class PackagesComponent { }
