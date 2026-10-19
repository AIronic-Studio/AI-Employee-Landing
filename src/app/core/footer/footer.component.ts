import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand -->
          <div class="footer-brand">
            <a class="logo" href="https://aironicstudio.pl/">
              <span class="logo-icon">⚡</span>
              <span class="logo-text">AIronic<span class="logo-accent">Studio</span></span>
            </a>
            <p class="footer-tagline">Software szyty na miarę w rozsądnych pieniądzach. Aplikacje, panele, automatyzacje i integracje dla małych i średnich firm.</p>
          </div>

          <!-- Usługi -->
          <div class="footer-col">
            <h4>Usługi</h4>
            <ul>
              <li><a href="https://aironicstudio.pl/#oferta">Aplikacje i panele</a></li>
              <li><a href="https://aironicstudio.pl/#oferta">Automatyzacje</a></li>
              <li><a href="https://aironicstudio.pl/#oferta">Integracje systemów</a></li>
              <li><a href="https://aironicstudio.pl/#oferta">AI w firmie</a></li>
              <li><a href="https://aironicstudio.pl/#wycena">Wycena</a></li>
            </ul>
          </div>

          <!-- Firma -->
          <div class="footer-col">
            <h4>Firma</h4>
            <ul>
              <li><a href="https://aironicstudio.pl/#o-nas">O nas</a></li>
              <li><a href="https://aironicstudio.pl/#projekty">Projekty</a></li>
              <li><a href="https://aironicstudio.pl/blog">Blog</a></li>
              <li><a href="https://aironicstudio.pl/#faq">FAQ</a></li>
              <li><a href="https://aironicstudio.pl/rodo">RODO</a></li>
            </ul>
          </div>

          <!-- Kontakt -->
          <div class="footer-col">
            <h4>Kontakt</h4>
            <ul>
              <li><a href="mailto:kontakt&#64;aironicstudio.pl">kontakt&#64;aironicstudio.pl</a></li>
              <li><a href="https://aironicstudio.pl/kontakt" class="cta-link">→ Umów bezpłatną konsultację</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="text-xs text-muted">© 2026 AIronic Studio. Wszelkie prawa zastrzeżone.</p>
          <p class="text-xs text-muted">AIronic Studio Paweł Niemiec | NIP: 6463021987</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--color-dark);
      border-top: 1px solid var(--color-surface-border);
      padding: var(--space-3xl) 0 var(--space-xl);
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: var(--space-2xl);
      margin-bottom: var(--space-2xl);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      margin-bottom: var(--space-md);
    }
    .logo-icon { font-size: 1.3rem; }
    .logo-accent { color: var(--color-primary); }

    .footer-tagline {
      font-size: 0.875rem;
      color: var(--color-text-muted);
      line-height: 1.65;
      max-width: 280px;
      margin-bottom: var(--space-lg);
    }


    .footer-col h4 {
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-text-dim);
      margin-bottom: var(--space-md);
    }
    .footer-col ul { list-style: none; }
    .footer-col ul li { margin-bottom: 10px; }
    .footer-col ul a {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      transition: color var(--transition-fast);
    }
    .footer-col ul a:hover { color: var(--color-text); }
    .cta-link { color: var(--color-primary) !important; font-weight: 500; }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      padding-top: var(--space-lg);
      border-top: 1px solid var(--color-surface-border);
    }

    @media (max-width: 768px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: var(--space-xl);
      }
      .footer-brand { grid-column: 1 / -1; }
      .footer-bottom { flex-direction: column; gap: var(--space-sm); }
    }

    @media (max-width: 480px) {
      .footer-grid { grid-template-columns: 1fr; }
    }

    @media (min-width: 769px) {
      .footer { padding-bottom: calc(var(--space-xl) + 50px); }
    }
  `]
})
export class FooterComponent { }
