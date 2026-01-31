import { getMarkdownPage } from '$lib/markdown';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const page = getMarkdownPage('activites', 'activites');
	
	if (!page) {
		return {
			metadata: { title: 'Activités' },
			html: '<p>Contenu non disponible.</p>'
		};
	}
	
	return page;
};

export const prerender = true;
