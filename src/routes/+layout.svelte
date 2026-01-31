<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import '../app.css';

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	// Helper to check if a path matches the current page
	function isActive(path: string): boolean {
		const currentPath = $page.url.pathname;
		if (path === `${base}/` || path === base) {
			return currentPath === `${base}/` || currentPath === base;
		}
		return currentPath.startsWith(path);
	}

	const mainLinks = [
		{ href: `${base}/`, label: 'Accueil' },
		{ href: `${base}/premiere-annee`, label: 'Première année' },
		{ href: `${base}/deuxieme-annee`, label: 'Deuxième année' },
		{ href: `${base}/troisieme-annee`, label: 'Troisième année' },
	];

	const resourceLinks = [
		{ href: `${base}/videos`, label: 'Vidéos' },
		{ href: `${base}/qcm`, label: 'QCM' },
		{ href: `${base}/activites`, label: 'Activités' },
		{ href: `${base}/pour-les-profs`, label: 'Pour les profs' },
		{ href: `${base}/a-propos`, label: 'À propos' },
	];
</script>

<div class="min-h-screen flex flex-col">
	<!-- Header -->
	<header class="bg-gray-800 text-white">
		<nav class="container mx-auto px-4 py-4">
			<div class="flex items-center justify-between">
				<!-- Logo -->
				<a href="{base}/" class="text-2xl font-bold text-orange-500" on:click={closeMobileMenu}>
					Exo<span class="text-white">7</span>
				</a>

				<!-- Desktop Menu -->
				<div class="hidden md:flex items-center space-x-6">
					{#each mainLinks as link}
						<a
							href={link.href}
							class="nav-link transition"
							class:nav-link-active={isActive(link.href)}
						>{link.label}</a>
					{/each}
					<span class="nav-separator">|</span>
					{#each resourceLinks as link}
						<a
							href={link.href}
							class="nav-link transition text-sm"
							class:nav-link-active={isActive(link.href)}
						>{link.label}</a>
					{/each}
				</div>

				<!-- Mobile Menu Button -->
				<button
					on:click={toggleMobileMenu}
					class="md:hidden text-white focus:outline-none"
					aria-label="Ouvrir le menu"
					aria-expanded={mobileMenuOpen}
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
					{#each mainLinks as link}
						<a
							href={link.href}
							class="block py-2 transition"
							class:nav-link-active={isActive(link.href)}
							class:text-white={!isActive(link.href)}
							on:click={closeMobileMenu}
						>{link.label}</a>
					{/each}
					<div class="border-t border-gray-600 my-2 pt-2">
						<div class="text-xs text-gray-400 mb-1 uppercase tracking-wide">Ressources</div>
						{#each resourceLinks as link}
							<a
								href={link.href}
								class="block py-2 transition"
								class:nav-link-active={isActive(link.href)}
								class:text-white={!isActive(link.href)}
								on:click={closeMobileMenu}
							>{link.label}</a>
						{/each}
					</div>
				</div>
			{/if}
		</nav>
	</header>

	<!-- Breadcrumb -->
	{#if $page.url.pathname !== `${base}/` && $page.url.pathname !== base}
		<div class="bg-gray-50 border-b border-gray-200">
			<div class="container mx-auto px-4 py-2 text-sm text-gray-600">
				<a href="{base}/" class="text-orange-500 hover:underline">Accueil</a>
				<span class="mx-2">/</span>
				<span class="text-gray-800 font-medium">
					{#if $page.url.pathname.includes('/premiere-annee')}
						Première année
					{:else if $page.url.pathname.includes('/deuxieme-annee')}
						Deuxième année
					{:else if $page.url.pathname.includes('/troisieme-annee')}
						Troisième année
					{:else if $page.url.pathname.includes('/cours/l1')}
						<a href="{base}/premiere-annee" class="text-orange-500 hover:underline">Première année</a>
						<span class="mx-2">/</span> Cours L1
					{:else if $page.url.pathname.includes('/cours/l2')}
						<a href="{base}/deuxieme-annee" class="text-orange-500 hover:underline">Deuxième année</a>
						<span class="mx-2">/</span> Cours L2
					{:else if $page.url.pathname.includes('/cours/l3')}
						<a href="{base}/troisieme-annee" class="text-orange-500 hover:underline">Troisième année</a>
						<span class="mx-2">/</span> Cours L3
					{:else if $page.url.pathname.includes('/videos')}
						Vidéos
					{:else if $page.url.pathname.includes('/qcm')}
						QCM
					{:else if $page.url.pathname.includes('/activites')}
						Activités
					{:else if $page.url.pathname.includes('/pour-les-profs')}
						Pour les profs
					{:else if $page.url.pathname.includes('/a-propos')}
						À propos
					{/if}
				</span>
			</div>
		</div>
	{/if}

	<!-- Main Content -->
	<main class="flex-grow container mx-auto px-4 py-8">
		<slot />
	</main>

	<!-- Footer -->
	<footer class="bg-gray-800 text-gray-300 py-8">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
				<!-- Colonne 1: À propos -->
				<div>
					<div class="text-lg font-bold text-orange-500 mb-3">Exo<span class="text-white">7</span></div>
					<p class="text-sm text-gray-400">
						Cours et exercices de mathématiques pour les niveaux L1, L2, L3.
						Tout le contenu est gratuit et librement téléchargeable.
					</p>
				</div>
				<!-- Colonne 2: Cours -->
				<div>
					<div class="text-sm font-bold text-white mb-3 uppercase tracking-wide">Cours par niveau</div>
					<ul class="space-y-2 text-sm">
						<li><a href="{base}/premiere-annee" class="footer-link">Première année (L1)</a></li>
						<li><a href="{base}/deuxieme-annee" class="footer-link">Deuxième année (L2)</a></li>
						<li><a href="{base}/troisieme-annee" class="footer-link">Troisième année (L3)</a></li>
					</ul>
				</div>
				<!-- Colonne 3: Ressources -->
				<div>
					<div class="text-sm font-bold text-white mb-3 uppercase tracking-wide">Ressources</div>
					<ul class="space-y-2 text-sm">
						<li><a href="{base}/videos" class="footer-link">Vidéos</a></li>
						<li><a href="{base}/qcm" class="footer-link">QCM</a></li>
						<li><a href="{base}/activites" class="footer-link">Activités</a></li>
						<li><a href="{base}/pour-les-profs" class="footer-link">Pour les profs</a></li>
						<li><a href="http://www.youtube.com/Exo7Math" target="_blank" class="footer-link">YouTube Exo7Math</a></li>
					</ul>
				</div>
			</div>
			<div class="border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
				<p>Exo7 - Cours et exercices de mathématiques &mdash; Dernière modification : janvier 2026</p>
			</div>
		</div>
	</footer>
</div>
