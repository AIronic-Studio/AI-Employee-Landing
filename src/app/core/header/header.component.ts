import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header" [class.scrolled]="scrolled()">
      <div class="container">
        <nav class="nav">
          <!-- Logo -->
          <a href="https://aironicstudio.pl/" class="logo" aria-label="AI Employee by AIronic Studio">
            <span class="logo-icon" aria-hidden="true">✳</span>
            <span class="logo-copy"><span class="logo-title">AI Employee</span><span class="logo-byline">by AIronic Studio</span></span>
          </a>

          <!-- Desktop Nav -->
          <ul class="nav-links" [class.open]="mobileOpen()">
            <li><a href="https://aironicstudio.pl/#oferta" (click)="mobileOpen.set(false)">Oferta</a></li>
            <li><a href="https://aironicstudio.pl/#projekty" (click)="mobileOpen.set(false)">Projekty</a></li>
            <li><a href="https://aironicstudio.pl/#wycena" (click)="mobileOpen.set(false)">Wycena</a></li>
            <li><a href="https://aironicstudio.pl/#o-nas" (click)="mobileOpen.set(false)">O nas</a></li>
            <li><a href="https://aironicstudio.pl/blog" (click)="mobileOpen.set(false)">Blog</a></li>
          </ul>

          <!-- CTA -->
          <div class="nav-cta">
            <a href="https://aironicstudio.pl/kontakt" class="btn btn--primary btn--sm hide-mobile">
              Bezpłatna konsultacja
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <!-- Hamburger -->
            <button class="hamburger" [class.open]="mobileOpen()" (click)="mobileOpen.set(!mobileOpen())" aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </nav>
      </div>

      <!-- Mobile backdrop -->
      @if (mobileOpen()) {
        <div class="backdrop" (click)="mobileOpen.set(false)"></div>
      }
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      height: 68px;
      transition: all 0.3s ease;
      background: rgba(250, 249, 244, .92);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border-bottom: 1px solid rgba(30, 43, 38, .08);
    }

    .header.scrolled {
      background: rgba(250, 249, 244, .98);
      border-bottom-color: rgba(30, 43, 38, .12);
    }

    .container { height: 100%; }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      gap: var(--space-xl);
      padding: 0 12px;
    }

    /* Logo */
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      color: #1e2b26;
    }
    .logo-icon {
      color: #19745a;
      font-size: 1.55rem;
    }
    .logo-copy { display: flex; flex-direction: column; gap: 1px; }
    .logo-title { font-size: .98rem; font-weight: 700; line-height: 1.05; letter-spacing: -.035em; }
    .logo-byline { color: #6c786f; font-size: .62rem; font-weight: 500; line-height: 1.1; letter-spacing: .01em; }

    /* Nav links */
    .nav-links {
      display: flex;
      align-items: center;
      gap: var(--space-xl);
      list-style: none;
    }
    .nav-links a {
      font-family: var(--font-sans);
      font-size: 0.84rem;
      font-weight: 500;
      color: #5d6b62;
      letter-spacing: 0;
      transition: color var(--transition-fast);
    }
    .nav-links a:hover,
    .nav-links a.active {
      color: #19745a;
    }

    .nav-cta .btn {
      border-radius: 12px;
      border: 1px solid transparent;
      background: #19745a;
      color: #fff;
      box-shadow: 0 6px 18px rgba(25, 116, 90, .2);
      font-family: var(--font-sans);
      font-size: .8rem;
      letter-spacing: 0;
      text-transform: none;
      padding: 10px 16px;
    }
    .nav-cta .btn:hover { background: #125540; }

    /* CTA area */
    .nav-cta {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      flex-shrink: 0;
    }

    /* Hamburger */
    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      padding: 4px;
    }
    .hamburger span {
      display: block;
      width: 22px;
      height: 2px;
      background: #1e2b26;
      border-radius: 2px;
      transition: all 0.3s ease;
    }
    .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
    .hamburger.open span:nth-child(2) { opacity: 0; }
    .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

    /* Backdrop */
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(30, 43, 38, .18);
      z-index: -1;
    }

    @media (max-width: 768px) {
      .nav-links {
        position: fixed;
        top: 68px; right: 0;
        width: 280px;
        height: calc(100vh - 68px);
        background: #faf9f4;
        border-left: 1px solid rgba(30, 43, 38, .12);
        flex-direction: column;
        align-items: flex-start;
        padding: var(--space-xl);
        gap: var(--space-lg);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        z-index: 999;
      }
      .nav-links.open { transform: translateX(0); }
      .nav-links a { font-size: 1rem; }
      .hamburger { display: flex; }
      .hide-mobile { display: none; }
      .nav-cta { gap: var(--space-sm); }
    }
  `]
})
export class HeaderComponent {
  scrolled = signal(false);
  mobileOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 20);
  }
}
