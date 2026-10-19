import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG_POSTS } from '../../core/models/blog.model';
import { SeoService } from '../../core/services/seo.service';


@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="blog-page">
      <div class="container">
        <div class="blog-header text-center">
          <span class="section-label">Baza Wiedzy</span>
          <h1 class="text-h1">Blog <span class="gradient-text">AIronic Studio</span></h1>
          <p class="text-lead" style="max-width: 600px; margin: var(--space-md) auto">
            Praktyczne wskazówki, case studies i nowości ze świata automatyzacji oraz AI.
          </p>
        </div>

        <div class="blog-grid">
          @for (post of posts; track post.slug) {
            <article class="blog-card card">
              <div class="blog-card-meta">
                <span class="badge badge--primary">{{ post.category }}</span>
                <span class="text-xs text-muted">{{ post.date }}</span>
              </div>
              <h2 class="blog-card-title">{{ post.title }}</h2>
              <p class="blog-card-excerpt">{{ post.excerpt }}</p>
              <div class="blog-card-footer">
                <span class="text-xs text-muted">{{ post.readTime }} czytania</span>
                <a [routerLink]="['/blog', post.slug]" class="btn btn--ghost btn--sm">Czytaj więcej →</a>
              </div>
            </article>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .blog-page {
      padding-top: 120px;
      padding-bottom: var(--space-3xl);
      min-height: 100vh;
    }
    .blog-header { margin-bottom: var(--space-3xl); }
    
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: var(--space-xl);
    }

    .blog-card {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
    }
    .blog-card-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .blog-card-title {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.3;
      margin: var(--space-xs) 0;
    }
    .blog-card-excerpt {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      flex: 1;
    }
    .blog-card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: var(--space-md);
      padding-top: var(--space-md);
      border-top: 1px solid var(--color-surface-border);
    }

    @media (max-width: 480px) {
      .blog-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class BlogListComponent implements OnInit {
  private seo = inject(SeoService);
  posts = BLOG_POSTS;

  ngOnInit() {
    this.seo.setMetaTags({
      title: 'Baza Wiedzy',
      description: 'Praktyczne wskazówki, case studies i nowości ze świata automatyzacji oraz AI. Dowiedz się, jak AIronic Studio transformuje biznes.',
      url: '/blog'
    });
  }
}
