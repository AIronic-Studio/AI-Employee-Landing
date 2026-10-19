import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-offer',
  imports: [RouterLink],
  template: `
    <section class="section section--surface" id="oferta">
      <div class="container">
        <div class="section-header text-center" style="margin-bottom: var(--space-3xl)">
          <span class="section-label">Co robimy</span>
          <h2 class="text-h2" style="margin: var(--space-md) 0">
            Wszelkiego typu software<br>
            <span class="gradient-text">szyty na miarę</span>
          </h2>
          <p class="text-lead" style="max-width: 540px; margin: var(--space-md) auto 0">
            Nie sprzedajemy licencji ani gotowych pudełek. Budujemy oprogramowanie dopasowane do tego, jak działa Twoja firma.
          </p>
        </div>

        <!-- Services grid (4 core services) -->
        <div class="services-grid">
          @for (service of coreServices; track service.title) {
            <div class="service-card">
              <div class="service-icon">{{ service.icon }}</div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <ul class="service-features">
                @for (feat of service.features; track feat) {
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {{ feat }}
                  </li>
                }
              </ul>
            </div>
          }
        </div>

        <!-- Featured: Rozsądne pieniądze -->
        <div class="infra-banner">
          <div class="infra-badge">💡 Nasza filozofia</div>
          <div class="infra-content">
            <div class="infra-left">
              <div class="infra-icon">⚖️</div>
              <div>
                <h3 class="infra-title">Software na miarę<br><span class="gradient-text">w rozsądnych pieniądzach</span></h3>
                <p class="infra-desc">
                  Oprogramowanie szyte na miarę nie musi kosztować tyle, co w dużym software house.
                  Jesteśmy małym zespołem bez korporacyjnego narzutu, więc płacisz za kod, który rozwiązuje Twój problem —
                  nie za spotkania i prezentacje.
                </p>
                <a routerLink="/kontakt" class="btn btn--primary infra-cta">Umów bezpłatną konsultację →</a>
              </div>
            </div>
            <div class="infra-features">
              @for (feat of featuredService.features; track feat.label) {
                <div class="infra-feat">
                  <span class="infra-feat-icon">{{ feat.icon }}</span>
                  <div>
                    <strong>{{ feat.label }}</strong>
                    <span>{{ feat.desc }}</span>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        <!-- Process -->
        <div class="process-section">
          <h3 class="text-h3 text-center" style="margin-bottom: var(--space-2xl)">Jak wygląda współpraca?</h3>
          <div class="process-steps">
            @for (step of processSteps; track step.number; let last = $last) {
              <div class="process-step">
                <div class="step-number">{{ step.number }}</div>
                <div class="step-content">
                  <h4>{{ step.title }}</h4>
                  <p>{{ step.description }}</p>
                </div>
              </div>
              @if (!last) {
                <div class="step-arrow">→</div>
              }
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: var(--space-lg);
      margin-bottom: var(--space-xl);
    }

    .service-card {
      background: var(--color-bg);
      border: 1px solid var(--color-surface-border);
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      transition: all var(--transition-base);
    }
    .service-card:hover {
      border-color: rgba(124, 92, 252, 0.4);
      transform: translateY(-4px);
      box-shadow: var(--shadow-glow-primary);
    }

    .service-icon { font-size: 2.2rem; margin-bottom: var(--space-md); }
    .service-card h3 { font-size: 1.1rem; margin-bottom: var(--space-sm); }
    .service-card p { font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.65; margin-bottom: var(--space-lg); }

    .service-features {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .service-features li {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.82rem;
      color: var(--color-text-muted);
    }

    /* Featured Infrastructure banner */
    .infra-banner {
      position: relative;
      background: linear-gradient(135deg, rgba(124, 92, 252, 0.15), rgba(56, 189, 248, 0.08));
      border: 1px solid rgba(124, 92, 252, 0.4);
      border-radius: var(--radius-xl);
      padding: var(--space-3xl);
      margin-bottom: var(--space-3xl);
      overflow: hidden;
    }
    .infra-banner::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse 60% 80% at 80% 50%, rgba(124,92,252,0.12), transparent);
      pointer-events: none;
    }

    .infra-badge {
      display: inline-block;
      background: var(--color-primary);
      color: #fff;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 4px 14px;
      border-radius: var(--radius-pill);
      margin-bottom: var(--space-xl);
      letter-spacing: 0.04em;
    }

    .infra-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-3xl);
      align-items: start;
    }

    .infra-left { display: flex; gap: var(--space-lg); align-items: flex-start; }
    .infra-icon { font-size: 3.5rem; flex-shrink: 0; }

    .infra-title {
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 1.25;
      margin-bottom: var(--space-md);
    }

    .infra-desc {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      line-height: 1.7;
      margin-bottom: var(--space-xl);
    }

    .infra-cta { display: inline-flex; }

    .infra-features {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
      padding: var(--space-xl);
      background: rgba(0,0,0,0.2);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(124,92,252,0.2);
    }

    .infra-feat {
      display: flex;
      gap: var(--space-md);
      align-items: flex-start;
    }
    .infra-feat-icon { font-size: 1.5rem; flex-shrink: 0; }
    .infra-feat div { display: flex; flex-direction: column; gap: 2px; }
    .infra-feat strong { font-size: 0.9rem; font-weight: 700; color: var(--color-text); }
    .infra-feat span { font-size: 0.8rem; color: var(--color-text-muted); line-height: 1.4; }

    /* Process */
    .process-section {
      background: var(--color-bg);
      border: 1px solid var(--color-surface-border);
      border-radius: var(--radius-xl);
      padding: var(--space-3xl);
    }

    .process-steps {
      display: flex;
      align-items: flex-start;
      gap: var(--space-md);
      flex-wrap: wrap;
      justify-content: center;
    }

    .process-step {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-md);
      max-width: 160px;
      text-align: center;
    }

    .step-number {
      width: 48px; height: 48px;
      border-radius: 50%;
      background: var(--color-primary);
      color: #fff;
      font-weight: 700;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-glow-primary);
      flex-shrink: 0;
    }

    .step-content h4 { font-size: 0.9rem; margin-bottom: 6px; }
    .step-content p { font-size: 0.8rem; color: var(--color-text-muted); line-height: 1.5; }


    .step-arrow {
      font-size: 1.5rem;
      color: var(--color-text-dim);
      margin-top: 12px;
      flex-shrink: 0;
    }

    @media (max-width: 900px) {
      .infra-content { grid-template-columns: 1fr; }
      .infra-banner { padding: var(--space-xl); }
    }
    @media (max-width: 768px) {
      .infra-left { flex-direction: column; }
      .process-section { padding: var(--space-xl); }
      .step-arrow { display: none; }
      .process-steps { flex-direction: column; align-items: center; }
    }
  `]
})
export class OfferComponent {
  coreServices = [
    {
      icon: '🖥️',
      title: 'Aplikacje i Panele',
      description: 'Aplikacje webowe, panele administracyjne, portale klienta i systemy wewnętrzne — zbudowane pod Twój proces.',
      features: ['Panele i dashboardy', 'Systemy CRM / ERP na miarę', 'Portale dla klientów', 'Aplikacje webowe i PWA']
    },
    {
      icon: '🔄',
      title: 'Automatyzacje',
      description: 'Automatyzujemy powtarzalne procesy — od zamówień i faktur po raporty i obsługę klienta.',
      features: ['n8n / Make workflows', 'Automatyczne raporty', 'Obieg dokumentów', 'Monitoring i alerty']
    },
    {
      icon: '🔗',
      title: 'Integracje Systemów',
      description: 'Łączymy Twoje systemy (ERP, CRM, sklep, księgowość) w jeden spójny ekosystem bez silosów danych.',
      features: ['Integracje API', 'Synchronizacja danych', 'Własne API i backendy', 'Migracje ze starych systemów']
    },
    {
      icon: '🤖',
      title: 'AI w Firmie',
      description: 'Wdrażamy AI tam, gdzie realnie pomaga — w obsłudze klienta, analizie dokumentów i generowaniu treści.',
      features: ['Chatboty i asystenci AI', 'Analiza dokumentów', 'Generowanie treści', 'AI wbudowane w Twój system']
    },
  ];

  featuredService = {
    features: [
      { icon: '🎯', label: 'Najpierw MVP', desc: 'Zaczynamy od wersji, która rozwiązuje najważniejszy problem — resztę rozbudowujemy etapami' },
      { icon: '👥', label: 'Mały, doświadczony zespół', desc: 'Rozmawiasz bezpośrednio z ludźmi, którzy piszą kod — bez warstw managerów' },
      { icon: '🧩', label: 'Sprawdzone komponenty', desc: 'Nie wymyślamy koła na nowo — budujemy na sprawdzonych rozwiązaniach' },
      { icon: '🔑', label: 'Kod na własność', desc: 'Dostajesz kod, dokumentację i dostęp do wszystkiego. Bez uzależnienia od nas' },
    ]
  };

  processSteps = [
    { number: '1', title: 'Bezpłatna Konsultacja', description: 'Poznajemy Twoją firmę, problem i to, co chcesz osiągnąć' },
    { number: '2', title: 'Wycena i Zakres', description: 'Dostajesz konkretny zakres, harmonogram i cenę przed startem' },
    { number: '3', title: 'Budowa', description: 'Pracujemy iteracyjnie i regularnie pokazujemy postępy' },
    { number: '4', title: 'Wdrożenie', description: 'Uruchamiamy system, przekazujemy dokumentację i szkolimy zespół' },
    { number: '5', title: 'Wsparcie i Rozwój', description: 'Utrzymujemy, poprawiamy i rozbudowujemy razem z Twoją firmą' },
  ];
}
