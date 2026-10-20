import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-sticky-cta',
  template: `
    <div class="sticky-bar" [class.visible]="visible()">
      <div class="container">
        <div class="sticky-inner">
          <p class="sticky-text">
            <span class="sticky-dot"></span>
            <strong>Software szyty na miarę</strong> w rozsądnych pieniądzach
          </p>
          <a href="https://aironicstudio.pl/kontakt" class="btn btn--accent btn--sm">
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
      border-top: 1px solid #e0e6ed;
      box-shadow: 0 -8px 28px rgba(25, 61, 105, .08);
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
      color: #596c83;
    }
    .sticky-text strong { color: #192b3e; }

    .sticky-dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: #b9dc66;
      flex-shrink: 0;
    }

    .sticky-bar .btn {
      border: 1px solid transparent;
      border-radius: 12px;
      background: #0B5FC3;
      color: #fff;
      box-shadow: 0 6px 18px rgba(11, 95, 195, .18);
      font-family: var(--font-sans);
      font-size: .8rem;
      letter-spacing: 0;
      text-transform: none;
      transition: background-color .18s ease;
    }

    .sticky-bar .btn:hover {
      background: #084A98;
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
