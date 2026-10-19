import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BLOG_POSTS } from '../../core/models/blog.model';
import { SeoService } from '../../core/services/seo.service';


@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (post) {
      <article class="post-page">
        <div class="container container--narrow">
          <div class="post-header">
            <a routerLink="/blog" class="back-link">← Wróć do bazy wiedzy</a>
            <div class="post-meta" style="margin-top: var(--space-xl)">
              <span class="badge badge--accent">{{ post.category }}</span>
              <span class="text-sm text-muted">{{ post.date }} · {{ post.readTime }} czytania</span>
            </div>
            <h1 class="text-h1" style="margin: var(--space-md) 0">{{ post.title }}</h1>
          </div>

          <div class="post-content" [innerHTML]="post.content"></div>

          <div class="post-footer card" style="margin-top: var(--space-3xl)">
            <h3>Potrzebujesz oprogramowania szytego na miarę?</h3>
            <p>Zróbmy pierwszy krok wspólnie. Bezpłatna konsultacja pomoże Ci określić priorytety.</p>
            <a routerLink="/kontakt" class="btn btn--primary" style="margin-top: var(--space-md)">Umów bezpłatną konsultację →</a>
          </div>
        </div>
      </article>
    } @else {
      <div class="container text-center" style="padding: 150px 0">
        <h1>Nie znaleziono artykułu</h1>
        <a routerLink="/blog" class="btn btn--primary">Wróć do bloga</a>
      </div>
    }
  `,
  styles: [`
    .post-page {
      padding-top: 120px;
      padding-bottom: var(--space-3xl);
    }
    .back-link {
      font-size: 0.9rem;
      color: var(--color-primary);
      font-weight: 500;
    }
    .post-meta {
      display: flex;
      align-items: center;
      gap: var(--space-md);
    }
    .post-content {
      margin-top: var(--space-2xl);
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--color-text);
    }
    .post-content ::ng-deep h2 {
      margin: var(--space-2xl) 0 var(--space-md);
      font-size: 1.75rem;
      font-weight: 800;
    }
    .post-content ::ng-deep p { margin-bottom: var(--space-md); }
    .post-content ::ng-deep ul { margin-bottom: var(--space-md); padding-left: var(--space-xl); }
    .post-content ::ng-deep li { margin-bottom: 8px; }

    .post-footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: var(--space-sm);
    }
  `]
})
export class BlogPostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);

  post = BLOG_POSTS.find(p => p.slug === this.route.snapshot.paramMap.get('slug'));

  ngOnInit() {
    if (this.post) {
      this.seo.setMetaTags({
        title: this.post.title,
        description: this.post.excerpt,
        url: `/blog/${this.post.slug}`,
        type: 'article'
      });
    }
  }
}
