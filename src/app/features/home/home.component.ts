import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { ProblemsComponent } from './sections/problems/problems.component';
import { OfferComponent } from './sections/offer/offer.component';
import { PackagesComponent } from './sections/packages/packages.component';
import { BlogTeaserComponent } from './sections/blog-teaser/blog-teaser.component';
import { FaqComponent } from './sections/faq/faq.component';
import { CtaFinalComponent } from './sections/cta-final/cta-final.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { TeamComponent } from './sections/team/team.component';


@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,

    ProblemsComponent,
    OfferComponent,
    PackagesComponent,
    BlogTeaserComponent,
    FaqComponent,
    CtaFinalComponent,
    ProjectsComponent,
    TeamComponent
  ],
  template: `
    <app-hero />

    <app-problems />
    <app-offer />
    <app-projects />
    <app-packages />
    <app-team />
    <app-blog-teaser />
    <app-faq />
    <app-cta-final />
  `
})
export class HomeComponent { }
