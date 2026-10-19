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
      background: #e8e4df;
      border-top: 1px solid rgba(0, 143, 120, .55);
      padding: 12px 0;
      z-index: 900;
      transform: translateY(100%);
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .sticky-bar.visible { transform: translateY(0); }

    .sticky-bar .container {
      border-right: 1px solid rgba(0, 143, 120, .38);
      border-left: 1px solid rgba(0, 143, 120, .38);
    }

    .sticky-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-lg);
      padding: 0 28px;
    }

    .sticky-text {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'DM Mono', monospace;
      font-size: 0.76rem;
      color: #4c5159;
    }
    .sticky-text strong { color: #12151a; }

    .sticky-dot {
      width: 7px; height: 7px;
      border-radius: 0;
      background: #008f78;
      flex-shrink: 0;
    }

    .sticky-bar .btn {
      border: 1px solid #008f78;
      border-radius: 0;
      background: var(--color-accent);
      color: #12151a;
      box-shadow: none;
      font-family: 'DM Mono', monospace;
      font-size: .7rem;
      letter-spacing: .015em;
      text-transform: uppercase;
      transition: background-color .18s ease;
    }

    .sticky-bar .btn:hover {
      background: #00d495;
      box-shadow: none;
      transform: none;
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
