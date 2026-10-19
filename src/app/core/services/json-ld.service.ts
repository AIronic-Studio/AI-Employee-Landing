import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class JsonLdService {
    private document = inject(DOCUMENT);

    insertSchema(schema: any, type: string = 'application/ld+json'): void {
        const script = this.document.createElement('script');
        script.type = type;
        script.text = JSON.stringify(schema);
        this.document.head.appendChild(script);
    }

    getWebsiteSchema() {
        return {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            'name': 'AIronic Studio',
            'url': 'https://aironicstudio.pl/',
            'potentialAction': {
                '@type': 'SearchAction',
                'target': 'https://aironicstudio.pl/blog?q={search_term_string}',
                'query-input': 'required name=search_term_string'
            }
        };
    }

    getOrganizationSchema() {
        return {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'AIronic Studio',
            'url': 'https://aironicstudio.pl/',
            'logo': 'https://aironicstudio.pl/logo.png',
            'description': 'Software house dla małych i średnich firm. Software szyty na miarę w rozsądnych pieniądzach: aplikacje webowe, panele, automatyzacje, integracje i AI.',
            'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Polska',
                'addressCountry': 'PL'
            },
            'contactPoint': {
                '@type': 'ContactPoint',
                'contactType': 'sales',
                'email': 'kontakt@aironicstudio.pl'
            }
        };
    }
}
