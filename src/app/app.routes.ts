import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/ai-employee/ai-employee.component').then(m => m.AiEmployeeComponent),
        title: 'AI Employee — Twój pracownik szyty na miarę | AIronic Studio'
    },
    {
        path: 'kontakt',
        loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
        title: 'Kontakt — AIronic Studio'
    },
    {
        path: 'audyt',
        redirectTo: 'kontakt'
    },
    {
        path: 'rodo',
        loadComponent: () => import('./features/rodo/rodo.component').then(m => m.RodoComponent)
    },
    {
        path: 'dziekujemy',
        loadComponent: () => import('./features/thank-you/thank-you.component').then(m => m.ThankYouComponent),
        title: 'Dziękujemy! — AIronic Studio'
    },
    {
        path: 'blog',
        loadComponent: () => import('./features/blog/blog-list.component').then(m => m.BlogListComponent),
        title: 'Blog — AIronic Studio'
    },
    {
        path: 'blog/:slug',
        loadComponent: () => import('./features/blog/blog-post.component').then(m => m.BlogPostComponent),
        title: 'Blog Post — AIronic Studio'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
