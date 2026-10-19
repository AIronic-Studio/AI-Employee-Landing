import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Project {
  name: string;
  url?: string;
  domain?: string;
  comingSoon?: boolean;
  partner?: { name: string; url: string };
  icon: string;
  tagline: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  template: `
    <section class="section" id="projekty">
      <div class="container">
        <div class="section-header text-center" style="margin-bottom: var(--space-3xl)">
          <span class="section-label">Nasze projekty</span>
          <h2 class="text-h2" style="margin: var(--space-md) 0">
            Projekty, przy których <span class="gradient-text">pracujemy</span>
          </h2>
          <p class="text-lead" style="max-width: 560px; margin: var(--space-md) auto 0">
            Oprócz zleceń dla klientów rozwijamy produkty — własne i wspólnie z partnerami.
            To, czego uczymy się przy nich, trafia potem do każdego systemu, który budujemy dla Ciebie.
          </p>
        </div>

        <div class="projects-grid">
          @for (project of projects; track project.name) {
            <article class="project-card" [class.project-card--soon]="project.comingSoon">
              <div class="project-top">
                <div class="project-icon">{{ project.icon }}</div>
                @if (project.comingSoon) {
                  <span class="project-soon">Wkrótce</span>
                } @else if (project.url) {
                  <a [href]="project.url" target="_blank" rel="noopener" class="project-domain">
                    {{ project.domain }}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M8 7h9v9"/></svg>
                  </a>
                }
              </div>
              <h3>{{ project.name }}</h3>
              <p class="project-tagline">{{ project.tagline }}</p>
              @if (project.partner) {
                <p class="project-partner">
                  Współtworzymy z
                  <a [href]="project.partner.url" target="_blank" rel="noopener">{{ project.partner.name }}</a>
                </p>
              }
              <p class="project-desc">{{ project.description }}</p>
              <div class="project-tags">
                @for (tag of project.tags; track tag) {
                  <span class="project-tag">{{ tag }}</span>
                }
              </div>
              @if (project.comingSoon) {
                <a routerLink="/kontakt" class="btn btn--ghost project-cta">Chcę wiedzieć więcej →</a>
              } @else if (project.url) {
                <a [href]="project.url" target="_blank" rel="noopener" class="btn btn--ghost project-cta">
                  Odwiedź {{ project.domain }} →
                </a>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--space-lg);
    }

    .project-card {
      background: var(--color-surface);
      border: 1px solid var(--color-surface-border);
      border-radius: var(--radius-xl);
      padding: var(--space-2xl);
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      transition: all var(--transition-base);
    }
    .project-card:hover {
      border-color: rgba(124, 92, 252, 0.4);
      transform: translateY(-4px);
      box-shadow: var(--shadow-glow-primary);
    }

    .project-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-md);
    }
    .project-icon { font-size: 2.2rem; }

    .project-domain {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 0.8rem;
      color: var(--color-text-muted);
      padding: 4px 12px;
      border: 1px solid var(--color-surface-border);
      border-radius: var(--radius-pill);
      transition: all var(--transition-fast);
    }
    .project-domain:hover {
      color: var(--color-primary);
      border-color: var(--color-primary);
    }

    .project-card--soon {
      border-style: dashed;
      border-color: rgba(124, 92, 252, 0.35);
      background: linear-gradient(145deg, rgba(124, 92, 252, 0.06), var(--color-surface));
    }

    .project-soon {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: #fff;
      background: var(--color-primary);
      padding: 4px 12px;
      border-radius: var(--radius-pill);
    }

    .project-card h3 { font-size: 1.4rem; font-weight: 800; }

    .project-tagline {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--color-primary);
    }

    .project-partner {
      font-size: 0.8rem;
      color: var(--color-text-muted);
    }
    .project-partner a {
      color: var(--color-text);
      font-weight: 600;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
    .project-partner a:hover { color: var(--color-primary); }

    .project-desc {
      font-size: 0.875rem;
      color: var(--color-text-muted);
      line-height: 1.65;
      flex: 1;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);
    }
    .project-tag {
      font-size: 0.75rem;
      color: var(--color-text-muted);
      padding: 4px 10px;
      background: var(--color-bg);
      border-radius: var(--radius-pill);
    }

    .project-cta {
      width: fit-content;
      margin-top: var(--space-sm);
    }

    @media (max-width: 768px) {
      .project-card { padding: var(--space-xl); }
    }
  `]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Next System',
      url: 'https://nextsystem.io',
      domain: 'nextsystem.io',
      icon: '🚀',
      partner: { name: 'NEXT LEAP', url: 'https://studionext.pl' },
      tagline: 'Strony B2B, które generują zapytania',
      description: 'Platforma dla firm produkcyjnych, dystrybutorów i usług technicznych, której strona nie przynosi zapytań ofertowych. Na podstawie obecnej strony przygotowujemy spersonalizowane demo w 1 dzień, a nowa strona dostaje działający formularz z powiadomieniami i bazą leadów, analitykę ruchu z filtrowaniem botów oraz miesięczne raporty. Hosting, aktualizacje i utrzymanie są w cenie abonamentu.',
      tags: ['Strony B2B', 'Leady', 'Analityka', 'Abonament'],
    },
    {
      name: 'VisualGen',
      url: 'https://visualgen.pl',
      domain: 'visualgen.pl',
      icon: '🎨',
      tagline: 'Zdjęcia produktowe generowane przez AI',
      description: 'Narzędzie dla sklepów internetowych: łączysz sklep WooCommerce, otwierasz produkt, opisujesz zdjęcie, które chcesz uzyskać — np. produkt na plaży o zachodzie słońca — i AI je generuje. Najlepsze ujęcia publikujesz jednym kliknięciem z powrotem w sklepie. Możesz też generować zdjęcia masowo — agent AI przygotuje prompty dla wielu produktów naraz — i edytować gotowe ujęcia.',
      tags: ['AI', 'E-commerce', 'WooCommerce', 'Generowanie masowe'],
    },
    {
      name: 'Firmowy Asystent AI',
      icon: '🤖',
      comingSoon: true,
      tagline: 'Zna Twoją firmę i pomaga zespołowi na co dzień',
      description: 'Asystent AI podłączony do dokumentów, procedur i systemów firmy, który pracuje 24 godziny na dobę. Odpowiada pracownikom na pytania, wyszukuje informacje i przygotowuje odpowiedzi dla klientów, a do tego samodzielnie wykonuje zadania w Twoich narzędziach — z zachowaniem kontroli nad tym, do jakich danych ma dostęp.',
      tags: ['AI', 'Działa 24/7', 'Wykonuje zadania', 'Baza wiedzy'],
    },
  ];
}
