import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-ai-employee',
  templateUrl: './ai-employee.component.html',
  styleUrl: './ai-employee.craft.css',
})
export class AiEmployeeComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly host = inject(ElementRef<HTMLElement>);
  private revealObserver?: IntersectionObserver;

  ngOnInit(): void {
    this.seo.setMetaTags({
      title: 'AI Employee — Twój pracownik szyty na miarę',
      description: 'Osobisty asystent AI, który pilnuje skrzynki i kalendarza, przygotowuje raporty i przejmuje powtarzalne zadania. Ty ustalasz zasady i zakres dostępu.',
      keywords: 'AI Employee, asystent AI, pracownik AI, automatyzacja zadań, asystent e-mail, raporty AI',
    });
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined' ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const hostElement = this.host.nativeElement as HTMLElement;
    const revealItems = hostElement.querySelectorAll('[data-reveal]');
    if (!revealItems.length) return;

    hostElement.classList.add('reveal-ready');
    this.revealObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          this.revealObserver?.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12 });

    revealItems.forEach((item: Element) => this.revealObserver?.observe(item));
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }
}
