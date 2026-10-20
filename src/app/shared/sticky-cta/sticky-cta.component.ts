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
      background: rgba(255, 255, 255, .94);
      border-top: 1px solid #e4e7dd;
      box-shadow: 0 -8px 28px rgba(36, 69, 43, .08);
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
      padding: 0;
    }

    .sticky-text {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: var(--font-sans);
      font-size: 0.85rem;
      color: #5d6b62;
    }
    .sticky-text strong { color: #1e2b26; }

    .sticky-dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: #b9dc66;
      flex-shrink: 0;
    }

    .sticky-bar .btn {
      border: 1px solid transparent;
      border-radius: 12px;
      background: #19745a;
      color: #fff;
      box-shadow: 0 6px 18px rgba(25, 116, 90, .2);
      font-family: var(--font-sans);
      font-size: .8rem;
      letter-spacing: 0;
      text-transform: none;
      transition: background-color .18s ease;
    }

    .sticky-bar .btn:hover {
      background: #125540;
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
