import { getMarkdownPage } from '$lib/markdown';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const page = getMarkdownPage('pages', 'a-propos');
	
	if (!page) {
		return {
			metadata: { title: 'À propos' },
			html: '<p>Contenu non disponible.</p>'
		};
	}
	
	return page;
};

export const prerender = true;
