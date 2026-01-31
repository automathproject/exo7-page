<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Cours - Exo7</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<h1 class="text-4xl font-bold text-gray-800 mb-4">
		Cours de mathématiques
	</h1>
	<p class="text-gray-600 mb-8">
		Choisissez votre niveau pour accéder aux cours disponibles.
	</p>
	
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<a href="{base}/cours/l1" class="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-orange-500 transition text-center">
			<h2 class="text-3xl font-bold text-orange-500 mb-3">L1</h2>
			<p class="text-gray-600 text-lg">Math Sup</p>
			<p class="text-gray-500 text-sm mt-2">Première année</p>
		</a>
		
		<a href="{base}/cours/l2" class="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-orange-500 transition text-center">
			<h2 class="text-3xl font-bold text-orange-500 mb-3">L2</h2>
			<p class="text-gray-600 text-lg">Math Spé</p>
			<p class="text-gray-500 text-sm mt-2">Deuxième année</p>
		</a>
		
		<a href="{base}/cours/l3" class="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-orange-500 transition text-center">
			<h2 class="text-3xl font-bold text-orange-500 mb-3">L3</h2>
			<p class="text-gray-600 text-lg">Licence</p>
			<p class="text-gray-500 text-sm mt-2">Troisième année</p>
		</a>
	</div>
</div>
