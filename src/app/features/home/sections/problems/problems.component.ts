import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-problems',
  imports: [RouterLink],
  template: `
    <section class="section" id="problemy">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-label">Czy to brzmi znajomo?</span>
          <h2 class="text-h2">
            Twoja firma zasługuje na <span class="gradient-text">narzędzia</span><br>
            dopasowane do niej, a nie odwrotnie
          </h2>
          <p class="text-lead" style="max-width: 560px; margin: 0 auto;">
            Małe i średnie firmy często utknęły pomiędzy Excelem, niedopasowanym SaaS-em
            a wyceną dużego software house'u. Jest trzecia droga.
          </p>
        </div>

        <div class="problems-grid">
          @for (problem of problems; track problem.title) {
            <div class="problem-card">
              <div class="problem-icon">{{ problem.icon }}</div>
              <div class="problem-content">
                <h3>{{ problem.title }}</h3>
                <p>{{ problem.description }}</p>
                <div class="problem-cost">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-danger)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  Koszt: <strong>{{ problem.cost }}</strong>
                </div>
              </div>
            </div>
          }
        </div>

        <div class="problems-cta text-center">
          <p class="text-muted" style="margin-bottom: var(--space-lg)">
            Rozpoznajesz swoją firmę? Porozmawiajmy — pierwsza konsultacja jest bezpłatna.
          </p>
          <a routerLink="/kontakt" class="btn btn--primary">
            Umów bezpłatną konsultację →
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-header { margin-bottom: var(--space-3xl); }
    .section-header h2 { margin: var(--space-md) 0; }
    .section-header .text-lead { margin-top: var(--space-md); }

    .problems-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--space-lg);
      margin-bottom: var(--space-3xl);
    }

    .problem-card {
      background: var(--color-surface);
      border: 1px solid var(--color-surface-border);
      border-radius: var(--radius-lg);
      padding: var(--space-lg);
      display: flex;
      gap: var(--space-lg);
      transition: all var(--transition-base);
    }
    .problem-card:hover {
      border-color: rgba(255, 77, 109, 0.3);
      transform: translateY(-3px);
    }

    .problem-icon { font-size: 2rem; flex-shrink: 0; }

    .problem-content h3 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: var(--space-sm);
    }
    .problem-content p {
      font-size: 0.875rem;
      color: var(--color-text-muted);
      line-height: 1.6;
      margin-bottom: var(--space-md);
    }

    .problem-cost {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.8rem;
      color: var(--color-text-muted);
      padding: 6px 12px;
      background: rgba(255, 77, 109, 0.06);
      border-radius: var(--radius-pill);
      width: fit-content;
    }
    .problem-cost strong { color: var(--color-danger); }

    .problems-cta { padding-top: var(--space-xl); }
  `]
})
export class ProblemsComponent {
  problems = [
    {
      icon: '📊',
      title: 'Firma działa na Excelu',
      description: 'Kluczowe dane żyją w arkuszach wysyłanych mailem. Nikt nie wie, która wersja jest aktualna, a jeden błąd w formule kosztuje godziny.',
      cost: 'błędy i chaos w danych'
    },
    {
      icon: '🧱',
      title: 'Gotowy SaaS nie pasuje',
      description: 'Płacisz abonament za narzędzie, które robi 60% tego, czego potrzebujesz. Resztę zespół obchodzi ręcznie albo w kolejnym arkuszu.',
      cost: 'abonamenty + ręczna praca'
    },
    {
      icon: '💸',
      title: 'Duży software house? Za drogo',
      description: 'Wycena na kilkaset tysięcy, trzy miesiące analizy i zespół, którego nie znasz. Dla małej i średniej firmy to po prostu nie ma sensu.',
      cost: 'projekt, który nie rusza'
    },
    {
      icon: '🔄',
      title: 'Dane w 5 systemach',
      description: 'CRM, ERP, sklep, księgowość, e-mail — każdy system ma inne dane. Brak integracji to błędy, podwójna praca i frustracja.',
      cost: '~10h/tydzień na korekty'
    },
    {
      icon: '🔁',
      title: 'Powtarzalna praca ręczna',
      description: 'Przepisywanie danych, raporty sklejane w poniedziałek rano, ręczne faktury i ponaglenia. To wszystko może robić się samo.',
      cost: '~8h/tydzień na osobę'
    },
    {
      icon: '🧓',
      title: 'Stary system, którego nikt nie rusza',
      description: 'Program napisany lata temu, bez dokumentacji i bez autora. Działa — do czasu. Każda zmiana to ryzyko.',
      cost: 'ryzyko przestoju'
    },
  ];
}
