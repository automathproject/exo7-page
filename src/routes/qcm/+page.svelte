<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.metadata.title || 'Vidéos'} - Exo7</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<h1 class="text-4xl font-bold text-gray-800 mb-8">
		{data.metadata.title || 'Vidéos'}
	</h1>
	
	<div class="prose prose-orange max-w-none">
		{@html data.html}
	</div>
</div>

<style>
	:global(.prose) {
		color: #374151;
	}
	
	:global(.prose h2) {
		color: #1f2937;
		font-size: 1.75rem;
		font-weight: 700;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
	
	:global(.prose h3) {
		color: #374151;
		font-size: 1.375rem;
		font-weight: 600;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}
	
	:global(.prose h4) {
		color: #4b5563;
		font-size: 1.125rem;
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
		margin-top: 0.75rem;
		margin-bottom: 0.75rem;
	}
	
	:global(.prose li) {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
	
	:global(.prose p) {
		margin-top: 0.75rem;
		margin-bottom: 0.75rem;
		line-height: 1.7;
	}
</style>
