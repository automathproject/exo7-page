import { getAllCours } from '$lib/markdown';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const niveau = params.niveau;
	const cours = getAllCours(niveau);
	
	return {
		niveau,
		cours
	};
};

export const prerender = true;
