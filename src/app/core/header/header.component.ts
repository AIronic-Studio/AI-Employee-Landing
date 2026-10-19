import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header" [class.scrolled]="scrolled()">
      <div class="container">
        <nav class="nav">
          <!-- Logo -->
          <a href="https://aironicstudio.pl/" class="logo">
            <span class="logo-icon">⚡</span>
            <span class="logo-text">AIronic<span class="logo-accent">Studio</span></span>
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
      background: rgba(12, 12, 20, 0.9);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--color-surface-border);
    }

    .header.scrolled {
      background: rgba(12, 12, 20, 0.94);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--color-surface-border);
    }

    .container { height: 100%; }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      gap: var(--space-xl);
    }

    /* Logo */
    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      flex-shrink: 0;
    }
    .logo-icon {
      font-size: 1.3rem;
      filter: drop-shadow(0 0 8px var(--color-primary));
    }
    .logo-accent { color: var(--color-primary); }

    /* Nav links */
    .nav-links {
      display: flex;
      align-items: center;
      gap: var(--space-xl);
      list-style: none;
    }
    .nav-links a {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--color-text-muted);
      transition: color var(--transition-fast);
    }
    .nav-links a:hover,
    .nav-links a.active {
      color: var(--color-text);
    }

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
      background: var(--color-text);
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
      background: rgba(0,0,0,0.6);
      z-index: -1;
    }

    @media (max-width: 768px) {
      .nav-links {
        position: fixed;
        top: 68px; right: 0;
        width: 280px;
        height: calc(100vh - 68px);
        background: var(--color-surface);
        border-left: 1px solid var(--color-surface-border);
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
