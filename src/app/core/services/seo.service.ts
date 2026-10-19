import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    private titleService = inject(Title);
    private metaService = inject(Meta);

    setMetaTags(config: {
        title?: string;
        description?: string;
        keywords?: string;
        image?: string;
        url?: string;
        type?: string;
    }) {
        const defaultTitle = 'AIronic Studio — Software szyty na miarę';
        const finalTitle = config.title ? `${config.title} | AIronic Studio` : defaultTitle;

        this.titleService.setTitle(finalTitle);

        if (config.description) {
            this.metaService.updateTag({ name: 'description', content: config.description });
            this.metaService.updateTag({ property: 'og:description', content: config.description });
            this.metaService.updateTag({ property: 'twitter:description', content: config.description });
        }

        if (config.keywords) {
            this.metaService.updateTag({ name: 'keywords', content: config.keywords });
        }

        this.metaService.updateTag({ property: 'og:title', content: finalTitle });
        this.metaService.updateTag({ property: 'twitter:title', content: finalTitle });

        if (config.image) {
            const imageUrl = config.image.startsWith('http') ? config.image : `https://aironicstudio.pl/${config.image}`;
            this.metaService.updateTag({ property: 'og:image', content: imageUrl });
            this.metaService.updateTag({ property: 'twitter:image', content: imageUrl });
        }

        if (config.url) {
            const fullUrl = config.url.startsWith('http') ? config.url : `https://aironicstudio.pl${config.url}`;
            this.metaService.updateTag({ property: 'og:url', content: fullUrl });
            this.metaService.updateTag({ property: 'twitter:url', content: fullUrl });
        }

        this.metaService.updateTag({ property: 'og:type', content: config.type || 'website' });
    }
}
