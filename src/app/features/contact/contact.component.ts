import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  template: `
<div class="contact-page">
  <div class="container">
    <div class="contact-wrap">
      <div class="contact-top text-center">
        <span class="badge badge--accent">✨ Bezpłatna Konsultacja</span>
        <h1 class="text-h2" style="margin: var(--space-md) 0">Opowiedz nam<br>o swoim projekcie</h1>
        <p class="text-muted">
          Napisz, czego potrzebujesz albo jaki problem chcesz rozwiązać.
          Odezwiemy się w ciągu 24 godzin.
        </p>
      </div>

      <form class="contact-card card" (submit)="submit($event)" novalidate>
        <div class="form-row">
          <label class="form-field">
            <span class="form-label">Imię i nazwisko *</span>
            <input class="form-input" type="text" name="name" autocomplete="name" required
              [value]="name()" (input)="name.set($any($event.target).value)" />
          </label>
          <label class="form-field">
            <span class="form-label">Email *</span>
            <input class="form-input" type="email" name="email" autocomplete="email" required
              [value]="email()" (input)="email.set($any($event.target).value)" />
          </label>
        </div>

        <div class="form-row">
          <label class="form-field">
            <span class="form-label">Telefon</span>
            <input class="form-input" type="tel" name="phone" autocomplete="tel"
              [value]="phone()" (input)="phone.set($any($event.target).value)" />
          </label>
          <label class="form-field">
            <span class="form-label">Firma</span>
            <input class="form-input" type="text" name="company" autocomplete="organization"
              [value]="company()" (input)="company.set($any($event.target).value)" />
          </label>
        </div>

        <label class="form-field">
          <span class="form-label">Wiadomość *</span>
          <textarea class="form-input form-textarea" name="message" required
            placeholder="Np. potrzebujemy panelu do obsługi zamówień, który połączy sklep z magazynem i księgowością..."
            [value]="message()" (input)="message.set($any($event.target).value)"></textarea>
        </label>

        <label class="consent-label">
          <input type="checkbox" name="consent" [checked]="consent()" (change)="consent.set($any($event.target).checked)" />
          <span>Wyrażam zgodę na kontakt w sprawie oferty AIronic Studio zgodnie z <a routerLink="/rodo" target="_blank">klauzulą informacyjną (RODO)</a> *</span>
        </label>

        @if (error()) {
          <p class="form-error">
            Nie udało się wysłać wiadomości. Spróbuj ponownie albo napisz bezpośrednio na
            <a href="mailto:kontakt&#64;aironicstudio.pl">kontakt&#64;aironicstudio.pl</a>.
          </p>
        }

        <button type="submit" class="btn btn--primary btn--lg submit-btn" [disabled]="!canSubmit() || submitting()">
          @if (submitting()) { Wysyłam... } @else { Wyślij wiadomość → }
        </button>
        <p class="form-note">* pola wymagane · bez zobowiązań</p>
      </form>
    </div>
  </div>
</div>
  `,
  styles: [`
    .contact-page {
      padding-top: 100px;
      padding-bottom: var(--space-3xl);
      min-height: 100vh;
      background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124, 92, 252, 0.08), transparent);
    }

    .contact-wrap {
      max-width: 680px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: var(--space-xl);
    }

    .contact-top { display: flex; flex-direction: column; gap: var(--space-sm); align-items: center; }

    .contact-card { display: flex; flex-direction: column; gap: var(--space-lg); }

    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); }

    .form-field { display: flex; flex-direction: column; gap: 6px; }
    .form-label { font-size: 0.82rem; font-weight: 500; color: var(--color-text-muted); }

    .form-input {
      width: 100%;
      padding: 14px 16px;
      background: var(--color-surface-2);
      border: 1px solid var(--color-surface-border);
      border-radius: var(--radius-md);
      color: var(--color-text);
      font-size: 0.9rem;
      font-family: var(--font-sans);
      transition: border-color var(--transition-base);
    }
    .form-input::placeholder { color: var(--color-text-dim); }
    .form-input:focus { outline: none; border-color: var(--color-primary); }

    .form-textarea { min-height: 160px; resize: vertical; line-height: 1.5; }

    .consent-label { display: flex; gap: var(--space-sm); align-items: flex-start; font-size: 0.78rem; color: var(--color-text-muted); cursor: pointer; line-height: 1.5; }
    .consent-label input { margin-top: 2px; accent-color: var(--color-primary); flex-shrink: 0; }
    .consent-label a { color: var(--color-primary); text-decoration: underline; }

    .form-error {
      font-size: 0.85rem;
      color: var(--color-danger);
      padding: var(--space-md);
      background: rgba(255, 77, 109, 0.08);
      border-radius: var(--radius-md);
    }
    .form-error a { text-decoration: underline; }

    .submit-btn { justify-content: center; }
    .form-note { font-size: 0.78rem; color: var(--color-text-dim); text-align: center; }

    @media (max-width: 600px) {
      .form-row { grid-template-columns: 1fr; }
    }
  `]
})
export class ContactComponent implements OnInit {
  private router = inject(Router);
  private seo = inject(SeoService);
  private http = inject(HttpClient);

  name = signal('');
  email = signal('');
  phone = signal('');
  company = signal('');
  message = signal('');
  consent = signal(false);
  submitting = signal(false);
  error = signal(false);

  canSubmit = computed(() =>
    this.name().trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email().trim()) &&
    this.message().trim().length > 5 &&
    this.consent()
  );

  ngOnInit() {
    this.seo.setMetaTags({
      title: 'Kontakt',
      description: 'Opowiedz nam o swoim projekcie i umów bezpłatną konsultację — software szyty na miarę w rozsądnych pieniądzach.',
      url: '/kontakt'
    });
  }

  submit(event: Event) {
    event.preventDefault();
    if (!this.canSubmit() || this.submitting()) return;

    this.submitting.set(true);
    this.error.set(false);

    const payload = {
      name: this.name().trim(),
      email: this.email().trim(),
      phone: this.phone().trim(),
      company: this.company().trim(),
      message: this.message().trim(),
      timestamp: new Date().toISOString(),
    };

    // TODO: podpiąć wysyłkę maila — wystarczy zmienić contactFormUrl w src/environments/
    this.http.post(environment.contactFormUrl, payload).subscribe({
      next: () => {
        this.submitting.set(false);
        this.router.navigate(['/dziekujemy']);
      },
      error: (err) => {
        console.error('Contact form error:', err);
        this.submitting.set(false);
        this.error.set(true);
      }
    });
  }
}
