import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { StickyCtaComponent } from './shared/sticky-cta/sticky-cta.component';
import { JsonLdService } from './core/services/json-ld.service';
import { inject, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, StickyCtaComponent],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
    <app-sticky-cta />
  `,
  styles: [`
    main {
      min-height: 100vh;
    }
  `]
})
export class App implements OnInit {
  private jsonLd = inject(JsonLdService);

  ngOnInit() {
    this.jsonLd.insertSchema(this.jsonLd.getWebsiteSchema());
    this.jsonLd.insertSchema(this.jsonLd.getOrganizationSchema());
  }
}

