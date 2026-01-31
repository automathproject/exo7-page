<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;
	
	const niveauTitles: Record<string, string> = {
		'l1': 'L1 - Math Sup',
		'l2': 'L2 - Math Spé',
		'l3': 'L3 - Licence'
	};
</script>

<svelte:head>
	<title>Cours {niveauTitles[data.niveau] || data.niveau} - Exo7</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<h1 class="text-4xl font-bold text-gray-800 mb-2">
		{niveauTitles[data.niveau] || data.niveau}
	</h1>
	<p class="text-gray-600 mb-8">Cours et exercices de mathématiques</p>
	
	{#if data.cours.length === 0}
		<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
			<p class="text-gray-700">Aucun cours disponible pour ce niveau pour le moment.</p>
		</div>
	{:else}
		<div class="space-y-6">
			{#each data.cours as cours}
				<article class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-orange-500 transition">
					<h2 class="text-2xl font-bold text-gray-800 mb-2">
						{cours.metadata.title}
					</h2>
					
					{#if cours.metadata.description}
						<p class="text-gray-600 mb-4">{cours.metadata.description}</p>
					{/if}
					
					<div class="prose prose-orange max-w-none">
						{@html cours.html}
					</div>
				</article>
			{/each}
		</div>
	{/if}
</div>

<style>
	:global(.prose) {
		color: #374151;
	}
	
	:global(.prose h2) {
		color: #1f2937;
		font-size: 1.5rem;
		font-weight: 700;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}
	
	:global(.prose h3) {
		color: #374151;
		font-size: 1.25rem;
		font-weight: 600;
		margin-top: 1.25rem;
		margin-bottom: 0.5rem;
	}
	
	:global(.prose a) {
		color: #ea580c;
		text-decoration: none;
	}
	
	:global(.prose a:hover) {
		text-decoration: underline;
	}
	
	:global(.prose ul) {
		list-style-type: disc;
		padding-left: 1.5rem;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
	
	:global(.prose li) {
		margin-top: 0.25rem;
		margin-bottom: 0.25rem;
	}
	
	:global(.prose p) {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
</style>
