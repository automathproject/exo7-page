import { getMarkdownPage } from '$lib/markdown';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const page = getMarkdownPage('qcm', 'qcm');
	
	if (!page) {
		return {
			metadata: { title: 'QCM' },
			html: '<p>Contenu non disponible.</p>'
		};
	}
	
	return page;
};

export const prerender = true;
