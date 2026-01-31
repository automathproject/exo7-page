import { getMarkdownPage } from '$lib/markdown';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const page = getMarkdownPage('videos', 'videos');
	
	if (!page) {
		return {
			metadata: { title: 'Vidéos' },
			html: '<p>Contenu non disponible.</p>'
		};
	}
	
	return page;
};

export const prerender = true;
