import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  imports: [RouterLink],
  template: `
    <div class="ty-page">
      <div class="container text-center">
        <div class="ty-icon">🎉</div>
        <h1 class="text-h1" style="margin: var(--space-lg) 0">Dziękujemy!<br><span class="gradient-text">Wiadomość dotarła.</span></h1>
        <p class="text-lead" style="max-width: 480px; margin: 0 auto var(--space-2xl)">
          Odezwiemy się w ciągu <strong>24 godzin</strong>, żeby porozmawiać o Twoim projekcie.
        </p>
        <div class="ty-steps">
          @for (step of steps; track step.title) {
            <div class="ty-step">
              <div class="ty-step-icon">{{ step.icon }}</div>
              <div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.desc }}</p>
              </div>
            </div>
          }
        </div>
        <a routerLink="/" class="btn btn--ghost" style="margin-top: var(--space-2xl)">← Wróć na stronę główną</a>
      </div>
    </div>
  `,
  styles: [`
    .ty-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: 80px;
      background: radial-gradient(ellipse 60% 40% at 50% 20%, rgba(124,92,252,0.1), transparent);
    }
    .ty-icon { font-size: 5rem; }
    .ty-steps {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      max-width: 480px;
      margin: 0 auto;
      text-align: left;
    }
    .ty-step {
      display: flex;
      gap: var(--space-lg);
      align-items: flex-start;
      padding: var(--space-lg);
      background: var(--color-surface);
      border-radius: var(--radius-md);
      border: 1px solid var(--color-surface-border);
    }
    .ty-step-icon { font-size: 1.5rem; flex-shrink: 0; }
    .ty-step h3 { font-size: 0.95rem; margin-bottom: 4px; }
    .ty-step p { font-size: 0.85rem; color: var(--color-text-muted); }
  `]
})
export class ThankYouComponent {
  steps = [
    { icon: '📂', title: 'Czytamy Twoją wiadomość', desc: 'Sprawdzamy, czego potrzebujesz i jak możemy pomóc.' },
    { icon: '📞', title: 'Kontakt w 24h', desc: 'Odezwiemy się, żeby umówić bezpłatną konsultację.' },
    { icon: '💰', title: 'Propozycja i wycena', desc: 'Po rozmowie dostajesz propozycję rozwiązania, zakres i cenę.' },
  ];
}
