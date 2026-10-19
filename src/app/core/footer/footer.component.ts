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
      background: #e8e4df;
      color: #12151a;
      border-top: 1px solid rgba(0, 143, 120, .55);
      padding: var(--space-3xl) 0 var(--space-xl);
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 0;
      margin-bottom: var(--space-2xl);
      border-top: 1px solid rgba(0, 143, 120, .42);
      border-left: 1px solid rgba(0, 143, 120, .42);
    }

    .footer-grid > div {
      padding: 32px 26px;
      border-right: 1px solid rgba(0, 143, 120, .42);
      border-bottom: 1px solid rgba(0, 143, 120, .42);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      margin-bottom: var(--space-md);
      color: #12151a;
      text-decoration: none;
    }
    .logo-icon { font-size: 1.3rem; }
    .logo-accent { color: var(--color-primary); }

    .footer-tagline {
      font-size: 0.875rem;
      color: #4c5159;
      line-height: 1.65;
      max-width: 280px;
      margin-bottom: var(--space-lg);
    }


    .footer-col h4 {
      font-family: 'DM Mono', monospace;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #008f78;
      margin-bottom: var(--space-md);
    }
    .footer-col ul { list-style: none; }
    .footer-col ul li { margin-bottom: 10px; }
    .footer-col ul a {
      font-size: 0.9rem;
      color: #4c5159;
      transition: color var(--transition-fast);
    }
    .footer-col ul a:hover { color: var(--color-primary); }
    .cta-link { color: #008f78 !important; font-weight: 600; }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      padding-top: var(--space-lg);
      border-top: 1px solid rgba(0, 143, 120, .42);
      color: #758696;
      font-family: 'DM Mono', monospace;
    }

    .footer-bottom .text-muted { color: #758696; }

    @media (max-width: 768px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr;
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
