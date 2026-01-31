<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import '../app.css';
	
	let mobileMenuOpen = false;
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<div class="min-h-screen flex flex-col">
	<!-- Header -->
	<header class="bg-gray-800 text-white">
		<nav class="container mx-auto px-4 py-4">
			<div class="flex items-center justify-between">
				<!-- Logo -->
				<a href="{base}/" class="text-2xl font-bold text-orange-500">
					Exo7
				</a>
				
				<!-- Desktop Menu -->
				<div class="hidden md:flex space-x-6">
					<a href="{base}/" class="hover:text-orange-500 transition">Accueil</a>
					<a href="{base}/premiere-annee" class="hover:text-orange-500 transition">Première année</a>
					<a href="{base}/deuxieme-annee" class="hover:text-orange-500 transition">Deuxième année</a>
					<a href="{base}/troisieme-annee" class="hover:text-orange-500 transition">Troisième année</a>
					<a href="{base}/pour-les-profs" class="hover:text-orange-500 transition">Pour les profs</a>
				</div>
				
				<!-- Mobile Menu Button -->
				<button 
					on:click={toggleMobileMenu}
					class="md:hidden text-white focus:outline-none"
					aria-label="Toggle menu"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{#if mobileMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						{/if}
					</svg>
				</button>
			</div>
			
			<!-- Mobile Menu -->
			{#if mobileMenuOpen}
				<div class="md:hidden mt-4 space-y-2">
					<a href="{base}/" class="block py-2 hover:text-orange-500 transition">Accueil</a>
					<a href="{base}/premiere-annee" class="block py-2 hover:text-orange-500 transition">Première année</a>
					<a href="{base}/deuxieme-annee" class="block py-2 hover:text-orange-500 transition">Deuxième année</a>
					<a href="{base}/troisieme-annee" class="block py-2 hover:text-orange-500 transition">Troisième année</a>
					<a href="{base}/pour-les-profs" class="block py-2 hover:text-orange-500 transition">Pour les profs</a>
				</div>
			{/if}
		</nav>
	</header>
	
	<!-- Main Content -->
	<main class="flex-grow container mx-auto px-4 py-8">
		<slot />
	</main>
	
	<!-- Footer -->
	<footer class="bg-gray-100 py-8">
		<div class="container mx-auto px-4 text-center text-gray-600">
			<p class="mb-4">Exo7 - Cours et exercices de mathématiques</p>
			<p class="text-sm">Dernière modification : 16 janvier 2026</p>
		</div>
	</footer>
</div>
