import { Component, signal } from '@angular/core';

interface FaqItem {
  q: string;
  a: string;
}

@Component({
  selector: 'app-faq',
  template: `
    <section class="section" id="faq">
      <div class="container container--narrow">
        <div class="section-header text-center" style="margin-bottom: var(--space-3xl)">
          <span class="section-label">FAQ</span>
          <h2 class="text-h2" style="margin: var(--space-md) 0">
            Najczęstsze pytania
          </h2>
        </div>

        <div class="faq-list">
          @for (item of items; track item.q; let i = $index) {
            <div class="faq-item" [class.open]="openIndex() === i">
              <button class="faq-question" (click)="toggle(i)">
                <span>{{ item.q }}</span>
                <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              <div class="faq-answer">
                <p>{{ item.a }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .faq-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .faq-item {
      background: var(--color-surface);
      border: 1px solid var(--color-surface-border);
      border-radius: var(--radius-md);
      overflow: hidden;
      transition: border-color var(--transition-base);
    }
    .faq-item.open {
      border-color: rgba(124, 92, 252, 0.4);
    }

    .faq-question {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-md);
      padding: var(--space-lg) var(--space-xl);
      text-align: left;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--color-text);
      transition: color var(--transition-base);
    }
    .faq-item.open .faq-question { color: var(--color-primary); }

    .faq-icon {
      flex-shrink: 0;
      color: var(--color-text-muted);
      transition: transform var(--transition-base);
    }
    .faq-item.open .faq-icon {
      transform: rotate(180deg);
      color: var(--color-primary);
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .faq-item.open .faq-answer {
      max-height: 300px;
    }
    .faq-answer p {
      padding: 0 var(--space-xl) var(--space-lg);
      font-size: 0.875rem;
      color: var(--color-text-muted);
      line-height: 1.7;
    }
  `]
})
export class FaqComponent {
  openIndex = signal<number | null>(0);

  toggle(i: number) {
    this.openIndex.set(this.openIndex() === i ? null : i);
  }

  items: FaqItem[] = [
    {
      q: 'Co właściwie robicie?',
      a: 'Jesteśmy małym software house\'em. Budujemy oprogramowanie szyte na miarę dla małych i średnich firm: aplikacje webowe, panele administracyjne, portale klienta, systemy wewnętrzne, automatyzacje procesów, integracje systemów i rozwiązania z AI.'
    },
    {
      q: 'Co znaczy „w rozsądnych pieniądzach”?',
      a: 'Że płacisz za to, czego naprawdę potrzebujesz. Zaczynamy od MVP, które rozwiązuje najważniejszy problem, budujemy na sprawdzonych komponentach i nie doliczamy kosztów rozbudowanej struktury — rozmawiasz bezpośrednio z ludźmi, którzy piszą kod.'
    },
    {
      q: 'Ile kosztuje konsultacja?',
      a: 'Nic. Pierwsza konsultacja jest bezpłatna i nie wiąże się z żadnym zobowiązaniem. Poznajemy Twój problem, proponujemy rozwiązanie i szacujemy koszt oraz czas realizacji. Decyzja należy do Ciebie.'
    },
    {
      q: 'Ile trwa realizacja projektu?',
      a: 'To zależy od zakresu. Prostą automatyzację czy integrację często uruchamiamy w kilka tygodni, większy panel lub system budujemy etapami. Pracujemy iteracyjnie i regularnie pokazujemy postępy, więc nie czekasz miesiącami na pierwszy efekt.'
    },
    {
      q: 'Co jeśli mój zespół nie jest techniczny?',
      a: 'Właśnie dla takich firm pracujemy najchętniej. Zajmujemy się całą techniczną stroną — od analizy potrzeb, przez projekt i budowę, po wdrożenie i szkolenie zespołu. Potrzebujesz tylko wiedzieć, co chcesz osiągnąć.'
    },
    {
      q: 'Do kogo należy kod?',
      a: 'Do Ciebie. Przekazujemy kod, dokumentację i dostępy do wszystkich usług. Nie uzależniamy Cię od siebie — jeśli kiedyś zechcesz rozwijać system z kimś innym, możesz to zrobić.'
    },
    {
      q: 'Czy zajmujecie się utrzymaniem i rozwojem po wdrożeniu?',
      a: 'Tak. Możemy utrzymywać, monitorować i rozwijać system po wdrożeniu. Żadnych długoterminowych umów w podstawowych projektach — przy stałym wsparciu obowiązuje 30-dniowy okres wypowiedzenia.'
    },
    {
      q: 'Czy obsługujecie firmy z całej Polski?',
      a: 'Tak, działamy w 100% zdalnie i współpracujemy z firmami z całej Polski. Przy większych projektach możemy spotkać się na miejscu.'
    },
  ];
}
