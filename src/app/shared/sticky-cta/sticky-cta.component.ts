import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sticky-cta',
  imports: [RouterLink],
  template: `
    <div class="sticky-bar" [class.visible]="visible()">
      <div class="container">
        <div class="sticky-inner">
          <p class="sticky-text">
            <span class="sticky-dot"></span>
            <strong>Software szyty na miarę</strong> w rozsądnych pieniądzach
          </p>
          <a routerLink="/kontakt" class="btn btn--accent btn--sm">
            Bezpłatna konsultacja →
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .sticky-bar {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      background: rgba(12, 12, 20, 0.95);
      backdrop-filter: blur(20px);
      border-top: 1px solid var(--color-surface-border);
      padding: 12px 0;
      z-index: 900;
      transform: translateY(100%);
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .sticky-bar.visible { transform: translateY(0); }

    .sticky-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-lg);
    }

    .sticky-text {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.9rem;
      color: var(--color-text-muted);
    }
    .sticky-text strong { color: var(--color-text); }

    .sticky-dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: var(--color-accent);
      animation: pulse-glow 2s infinite;
      flex-shrink: 0;
    }

    @media (max-width: 768px) {
      .sticky-bar { display: none; }
    }
  `]
})
export class StickyCtaComponent {
  visible = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    this.visible.set(progress > 0.3);
  }
}
