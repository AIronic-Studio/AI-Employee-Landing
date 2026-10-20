import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand -->
          <div class="footer-brand">
            <a class="logo" href="https://aironicstudio.pl/" aria-label="AI Employee by AIronic Studio">
              <span class="logo-icon" aria-hidden="true">✳</span>
              <span class="logo-copy"><span class="logo-title">AI Employee</span><span class="logo-byline">by AIronic Studio</span></span>
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
      background: #f3f4ed;
      color: #1e2b26;
      border-top: 1px solid #e2e7dd;
      padding: var(--space-3xl) 0 var(--space-xl);
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: var(--space-2xl);
      margin-bottom: var(--space-2xl);
      border: 0;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: var(--space-md);
      color: #1e2b26;
      text-decoration: none;
    }
    .logo-icon { color: #19745a; font-size: 1.55rem; }
    .logo-copy { display: flex; flex-direction: column; gap: 1px; }
    .logo-title { font-size: .98rem; font-weight: 700; line-height: 1.05; letter-spacing: -.035em; }
    .logo-byline { color: #6c786f; font-size: .62rem; font-weight: 500; line-height: 1.1; letter-spacing: .01em; }

    .footer-tagline {
      font-size: 0.875rem;
      color: #5d6b62;
      line-height: 1.65;
      max-width: 280px;
      margin-bottom: var(--space-lg);
    }


    .footer-col h4 {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #798479;
      margin-bottom: var(--space-md);
    }
    .footer-col ul { list-style: none; }
    .footer-col ul li { margin-bottom: 10px; }
    .footer-col ul a {
      font-size: 0.9rem;
      color: #5d6b62;
      transition: color var(--transition-fast);
    }
    .footer-col ul a:hover { color: #19745a; }
    .cta-link { color: #19745a !important; font-weight: 600; }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      padding-top: var(--space-lg);
      border-top: 1px solid #e0e5dc;
      color: #748077;
      font-family: var(--font-sans);
    }

    .footer-bottom .text-muted { color: #748077; }

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
