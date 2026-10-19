import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG_POSTS } from '../../../../core/models/blog.model';

@Component({
  selector: 'app-blog-teaser',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section" id="blog-teaser" style="background: var(--color-surface-2)">
      <div class="container">
        <div class="section-header text-center" style="margin-bottom: var(--space-3xl)">
          <span class="section-label">Baza Wiedzy</span>
          <h2 class="text-h2">Ostatnio na <span class="gradient-text">blogu</span></h2>
        </div>

        <div class="blog-grid">
          @for (post of recentPosts; track post.slug) {
            <article class="blog-card card">
              <div class="blog-card-meta">
                <span class="badge badge--primary">{{ post.category }}</span>
              </div>
              <h3 class="blog-card-title">{{ post.title }}</h3>
              <p class="blog-card-excerpt">{{ post.excerpt }}</p>
              <a [routerLink]="['/blog', post.slug]" class="text-link text-sm">Czytaj dalej →</a>
            </article>
          }
        </div>

        <div class="text-center" style="margin-top: var(--space-2xl)">
          <a routerLink="/blog" class="btn btn--ghost">Wszystkie artykuły</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-xl);
    }
    .blog-card {
      background: var(--color-surface);
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }
    .blog-card-title {
      font-size: 1.15rem;
      font-weight: 700;
      line-height: 1.3;
    }
    .blog-card-excerpt {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      flex: 1;
    }
    .text-link {
      color: var(--color-primary);
      font-weight: 600;
      text-decoration: none;
    }
    .text-link:hover { text-decoration: underline; }
  `]
})
export class BlogTeaserComponent {
  recentPosts = BLOG_POSTS.slice(0, 3);
}
