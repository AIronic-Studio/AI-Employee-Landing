import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-rodo',
  standalone: true,
  template: `
    <div class="legal-page">
      <div class="container container--narrow">
        <header class="legal-header text-center">
          <span class="section-label">Informacja prawna</span>
          <h1 class="text-h1">Klauzula <span class="gradient-text">RODO</span></h1>
          <p class="text-lead">Obowiązek informacyjny AIronic Studio</p>
        </header>

        <div class="legal-content card">
          <section class="legal-section">
            <h2>1. Administrator Danych</h2>
            <p>
              Administratorem Państwa danych osobowych jest <strong>AIronic Studio Paweł Niemiec</strong> 
              z siedzibą w Tychach, NIP: 6463021987 (dalej: "Administrator").
            </p>
            <p>Kontakt: <a href="mailto:kontakt@aironicstudio.pl">kontakt@aironicstudio.pl</a></p>
          </section>

          <section class="legal-section">
            <h2>2. Cele i Podstawy Przetwarzania</h2>
            <ul>
              <li><strong>Kontakt i obsługa zapytań:</strong> Przetwarzamy dane w celu odpowiedzi na przesłany formularz (art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes Administratora).</li>
              <li><strong>Przygotowanie oferty i audytu:</strong> Przetwarzamy dane w celu podjęcia działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy (art. 6 ust. 1 lit. b RODO).</li>
              <li><strong>Marketing:</strong> Jeśli wyrazili Państwo zgodę, przetwarzamy dane w celach informowania o nowych usługach (art. 6 ust. 1 lit. a RODO).</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>3. Okres Przechowywania</h2>
            <p>
              Dane będą przechowywane przez okres niezbędny do obsługi zapytania, realizacji audytu lub do czasu wycofania zgody (w przypadku działań marketingowych). 
              W celach archiwalnych i obrony przed roszczeniami – zgodnie z obowiązującymi przepisami prawa.
            </p>
          </section>

          <section class="legal-section">
            <h2>4. Prawa Osoby, Której Dane Dotyczą</h2>
            <p>Posiadają Państwo prawo do:</p>
            <ul>
              <li>Dostępu do swoich danych oraz otrzymania ich kopii.</li>
              <li>Sprostowania (poprawiania) danych.</li>
              <li>Usunięcia danych ("prawo do bycia zapomnianym").</li>
              <li>Ograniczenia przetwarzania.</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania.</li>
              <li>Cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania przed jej cofnięciem.</li>
            </ul>
            <p>Mają Państwo również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</p>
          </section>

          <section class="legal-section">
            <h2>5. Odbiorcy Danych</h2>
            <p>
              Państwa dane mogą być przekazywane podmiotom wspierającym Administratora w świadczeniu usług drogą elektroniczną (np. dostawcy hostingu, narzędzia do automatyzacji jak n8n). 
              Wszystkie podmioty przetwarzają dane na podstawie umów powierzenia.
            </p>
          </section>
        </div>

        <div class="text-center" style="margin-top: var(--space-2xl)">
          <a href="/" class="btn btn--ghost">← Wróć na stronę główną</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .legal-page {
      padding-top: 140px;
      padding-bottom: var(--space-3xl);
      min-height: 100vh;
    }
    .container--narrow { max-width: 800px; }
    .legal-header { margin-bottom: var(--space-3xl); }
    
    .legal-content {
      padding: var(--space-2xl);
      line-height: 1.6;
    }
    
    .legal-section { margin-bottom: var(--space-xl); }
    .legal-section h2 { 
      font-size: 1.25rem; 
      margin-bottom: var(--space-md);
      color: var(--color-text);
    }
    .legal-section p, .legal-section li { 
      color: var(--color-text-muted);
      margin-bottom: var(--space-sm);
    }
    .legal-section ul { padding-left: var(--space-lg); }
    
    @media (max-width: 768px) {
      .legal-content { padding: var(--space-lg); }
    }
  `]
})
export class RodoComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.setMetaTags({
      title: 'RODO - Klauzula Informacyjna',
      description: 'Zasady przetwarzania danych osobowych przez AIronic Studio Paweł Niemiec.',
      url: '/rodo'
    });
  }
}
