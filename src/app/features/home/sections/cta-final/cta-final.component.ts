import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-final',
  imports: [RouterLink],
  template: `
    <section class="section cta-final">
      <div class="cta-orb cta-orb--1"></div>
      <div class="cta-orb cta-orb--2"></div>

      <div class="container text-center" style="position: relative; z-index: 1">
        <span class="section-label" style="justify-content: center; margin-bottom: var(--space-lg)">Gotowy na zmianę?</span>
        <h2 class="text-h2" style="margin-bottom: var(--space-lg)">
          Zacznij od <span class="gradient-text">bezpłatnej konsultacji</span>
        </h2>
        <p class="text-lead" style="max-width: 540px; margin: 0 auto var(--space-2xl)">
          Opowiedz nam o swoim pomyśle lub problemie. Zaproponujemy rozwiązanie
          szyte na miarę — w rozsądnych pieniądzach, bez zobowiązań.
        </p>

        <div class="cta-actions">
          <a href="https://aironicstudio.pl/kontakt" class="btn btn--primary btn--lg">
            Umów bezpłatną konsultację
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a [routerLink]="['/']" fragment="projekty" class="btn btn--ghost btn--lg">
            Zobacz nasze projekty →
          </a>
        </div>

        <div class="cta-trust">
          @for (t of trustItems; track t) {
            <div class="trust-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              {{ t }}
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta-final {
      position: relative;
      overflow: hidden;
      background: var(--color-dark);
      border-top: 1px solid var(--color-surface-border);
    }

    .cta-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(120px);
      pointer-events: none;
    }
    .cta-orb--1 {
      width: 600px; height: 600px;
      background: rgba(124, 92, 252, 0.2);
      top: -200px; left: 50%;
      transform: translateX(-50%);
    }
    .cta-orb--2 {
      width: 400px; height: 400px;
      background: rgba(0, 229, 160, 0.08);
      bottom: -100px; right: 10%;
    }

    .cta-actions {
      display: flex;
      justify-content: center;
      gap: var(--space-md);
      flex-wrap: wrap;
      margin-bottom: var(--space-2xl);
    }

    .cta-trust {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: var(--space-xl);
    }
    .trust-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85rem;
      color: var(--color-text-muted);
    }
  `]
})
export class CtaFinalComponent {
  trustItems = [
    'Bez umowy na rok',
    'Wycena przed startem',
    'Bezpośredni kontakt z programistami',
    'Własność kodu i dokumentacji',
  ];
}
