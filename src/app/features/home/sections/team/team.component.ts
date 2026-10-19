import { Component } from '@angular/core';

interface TeamLink {
  label: string;
  url: string;
  icon: 'linkedin' | 'github';
}

interface TeamMember {
  name: string;
  initials: string;
  image?: string;
  roles: string[];
  bio: string;
  links?: TeamLink[];
}

@Component({
  selector: 'app-team',
  template: `
    <section class="section section--surface" id="o-nas">
      <div class="container">
        <div class="section-header text-center" style="margin-bottom: var(--space-3xl)">
          <span class="section-label">O nas</span>
          <h2 class="text-h2" style="margin: var(--space-md) 0">
            Mały zespół, <span class="gradient-text">duże doświadczenie</span>
          </h2>
          <p class="text-lead" style="max-width: 600px; margin: var(--space-md) auto 0">
            AIronic Studio to mały software house. U nas rozmawiasz bezpośrednio z ludźmi,
            którzy projektują i piszą Twój system — bez pośredników, bez przekazywania projektu dalej.
          </p>
        </div>

        <div class="team-grid">
          @for (member of team; track member.name) {
            <article class="member-card">
              @if (member.image) {
                <img class="member-avatar" [src]="member.image" [alt]="member.name" />
              } @else {
                <div class="member-avatar" aria-hidden="true">{{ member.initials }}</div>
              }
              <div class="member-info">
                <h3>{{ member.name }}</h3>
                <div class="member-roles">
                  @for (role of member.roles; track role) {
                    <span class="member-role">{{ role }}</span>
                  }
                </div>
                <p class="member-bio">{{ member.bio }}</p>
                @if (member.links?.length) {
                  <div class="member-links" aria-label="Profile links">
                    @for (link of member.links; track link.url) {
                      <a
                        class="member-link"
                        [href]="link.url"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @switch (link.icon) {
                          @case ('linkedin') {
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                            </svg>
                          }
                          @case ('github') {
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M12 .297a12 12 0 0 0-3.795 23.385c.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57A12 12 0 0 0 12 .297Z" />
                            </svg>
                          }
                        }
                        {{ link.label }}
                      </a>
                    }
                  </div>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: var(--space-lg);
      max-width: 960px;
      margin: 0 auto;
    }

    .member-card {
      background: var(--color-bg);
      border: 1px solid var(--color-surface-border);
      border-radius: var(--radius-xl);
      padding: var(--space-2xl);
      display: flex;
      gap: var(--space-lg);
      align-items: flex-start;
      transition: all var(--transition-base);
    }
    .member-card:hover {
      border-color: rgba(124, 92, 252, 0.4);
      transform: translateY(-4px);
    }

    .member-avatar {
      width: 72px; height: 72px;
      border-radius: 50%;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      font-weight: 800;
      color: #fff;
      background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
      box-shadow: var(--shadow-glow-primary);
      object-fit: cover;
      object-position: center;
    }

    .member-info {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }
    .member-info h3 { font-size: 1.2rem; font-weight: 700; }

    .member-roles {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .member-role {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--color-primary);
      padding: 3px 10px;
      background: rgba(124, 92, 252, 0.1);
      border-radius: var(--radius-pill);
    }

    .member-bio {
      font-size: 0.875rem;
      color: var(--color-text-muted);
      line-height: 1.65;
      margin-top: var(--space-xs);
    }

    .member-links {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
      margin-top: var(--space-xs);
    }

    .member-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 10px;
      color: var(--color-primary);
      background: rgba(124, 92, 252, 0.08);
      border: 1px solid rgba(124, 92, 252, 0.2);
      border-radius: var(--radius-pill);
      font-size: 0.75rem;
      font-weight: 600;
      text-decoration: none;
      transition: var(--transition-base);
    }

    .member-link:hover {
      color: var(--color-primary-hover);
      background: rgba(124, 92, 252, 0.15);
      border-color: rgba(124, 92, 252, 0.4);
    }

    .member-link:focus-visible {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
    }

    .member-link svg {
      width: 15px;
      height: 15px;
      flex-shrink: 0;
      fill: currentColor;
    }

    @media (max-width: 480px) {
      .member-card { flex-direction: column; padding: var(--space-xl); }
    }
  `]
})
export class TeamComponent {
  team: TeamMember[] = [
    {
      name: 'Paweł Niemiec',
      initials: 'PN',
      image: '/team/pawel-niemiec.webp',
      roles: ['Founder', 'IT Solutions Architect'],
      bio: 'Od lat projektuję i buduję oprogramowanie — od dużych systemów międzynarodowych po projekty rządowe. Najlepiej czuję się tam, gdzie technologia spotyka biznes: słucham, czego firma naprawdę potrzebuje, i przekładam to na architekturę, która działa i da się rozwijać. W AIronic Studio ten sam poziom inżynierii oferuję małym i średnim firmom.',
    },
    {
      name: 'Franciszek Kubala',
      initials: 'FK',
      image: '/team/prof.webp',
      roles: ['Co-Founder', 'Software Engineer', 'AI Specialist'],
      bio: 'Pasjonat programowania od wielu lat. Student AGH i założyciel Koła Naukowego Artificial Intelligence in Medicine AGH, które realizuje projekty na styku AI, informatyki i medycyny. Zamieniam pomysły w produkty, które stawiają technologię w służbie ludzi.',
      links: [
        {
          label: 'LinkedIn',
          url: 'https://linkedin.com/in/franciszek-kubala-0793073bb',
          icon: 'linkedin',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/xXKeNdAmAmAsTeRXx',
          icon: 'github',
        },
        {
          label: 'Koło Naukowe AI Med AGH',
          url: 'https://www.linkedin.com/company/ko%C5%82o-naukowe-ai-med-agh/',
          icon: 'linkedin',
        },
      ],
    },
  ];
}
