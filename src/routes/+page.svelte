<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Exo7 - Cours et exercices de mathématiques</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<div class="text-center mb-12">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
			Exo<span class="text-orange-500">7</span>
		</h1>
		<p class="text-xl text-gray-600 mb-2">
			Cours et exercices de mathématiques
		</p>
		<p class="text-gray-600 mb-4">
			Le projet Exo7 propose aux étudiants des cours de maths, des exercices avec corrections et des vidéos de mathématiques avec niveau L1/Math Sup, L2/Math Spé, L3/Licence.
		</p>
		<a href="http://www.youtube.com/Exo7Math" target="_blank" class="inline-block">
			<img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YouTube" class="h-8 mx-auto" />
		</a>
	</div>
	
	<!-- Section Cours par niveau -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Cours par niveau</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<a href="{base}/cours/l1" class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-orange-500 transition">
				<h3 class="text-2xl font-bold text-orange-500 mb-2">L1 - Math Sup</h3>
				<p class="text-gray-600">Première année</p>
			</a>
			<a href="{base}/cours/l2" class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-orange-500 transition">
				<h3 class="text-2xl font-bold text-orange-500 mb-2">L2 - Math Spé</h3>
				<p class="text-gray-600">Deuxième année</p>
			</a>
			<a href="{base}/cours/l3" class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-orange-500 transition">
				<h3 class="text-2xl font-bold text-orange-500 mb-2">L3 - Licence</h3>
				<p class="text-gray-600">Troisième année</p>
			</a>
		</div>
	</section>
	
	<!-- Section Ressources -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Ressources</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<a href="{base}/videos" class="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 hover:border-orange-500 transition">
				<h3 class="text-xl font-bold text-gray-800 mb-2">📹 Vidéos</h3>
				<p class="text-gray-600">Vidéos YouTube pour venir sur Amazon en N&B</p>
			</a>
			<a href="{base}/qcm" class="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 hover:border-orange-500 transition">
				<h3 class="text-xl font-bold text-gray-800 mb-2">✏️ QCM</h3>
				<p class="text-gray-600">Questionnaires à choix multiples interactifs</p>
			</a>
			<a href="{base}/activites" class="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 hover:border-orange-500 transition">
				<h3 class="text-xl font-bold text-gray-800 mb-2">🎮 Activités</h3>
				<p class="text-gray-600">Scratch au collège et Python au lycée</p>
			</a>
			<a href="{base}/a-propos" class="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 hover:border-orange-500 transition">
				<h3 class="text-xl font-bold text-gray-800 mb-2">ℹ️ À propos</h3>
				<p class="text-gray-600">Auteurs et informations sur le projet</p>
			</a>
		</div>
	</section>
	
	<!-- Section Actualités (optionnel) -->
	<section class="bg-gray-50 border border-gray-200 rounded-lg p-6">
		<h2 class="text-2xl font-bold text-gray-800 mb-4">Actualités</h2>
		<div class="space-y-3">
			<div>
				<p class="text-sm text-gray-500">Juillet 2025</p>
				<p class="text-gray-700">Nouvelle édition de <a href="http://exo7.emath.fr/cours/livre-deepmath.pdf" class="text-orange-500 hover:underline">Deepmath : mathématiques des réseaux de neurones</a> avec deux nouveaux chapitres sur ChatGPT. En vente, en noir et blanc, sur <a href="https://www.amazon.fr/dp/B08TRRNBMQ" class="text-orange-500 hover:underline">Amazon</a>.</p>
			</div>
			<div>
				<p class="text-sm text-gray-500">Avril 2025</p>
				<p class="text-gray-700"><a href="https://qalgo.org/" class="text-orange-500 hover:underline">qalgo.org</a> pour expérimenter vos circuits quantiques découverts avec le livre <a href="http://exo7.emath.fr/cours/livre-quantum.pdf" class="text-orange-500 hover:underline">Quantum</a>.</p>
			</div>
			<div>
				<p class="text-sm text-gray-500">Janvier 2025</p>
				<p class="text-gray-700"><a href="http://exo7.emath.fr/cours/cours-fpv.pdf" class="text-orange-500 hover:underline">Cours</a> et <a href="http://exo7.emath.fr/cours/all-exercices-fpv.pdf" class="text-orange-500 hover:underline">exercices corrigés</a> "Fonctions de plusieurs variables".</p>
			</div>
			<div>
				<p class="text-sm text-gray-500">Octobre 2024</p>
				<p class="text-gray-700">Vidéos courtes de mathématiques <a href="https://www.youtube.com/@Math-Shorts-Exo7" class="text-orange-500 hover:underline">"Shorts"</a>.</p>
			</div>
			<div>
				<p class="text-sm text-gray-500">Juillet 2024</p>
				<p class="text-gray-700">80 <a href="https://www.youtube.com/@MathGame-Exo7" class="text-orange-500 hover:underline">vidéos</a> pour le livre <a href="http://exo7.emath.fr/cours/livre-mathgame.pdf" class="text-orange-500 hover:underline">Mathématiques pour les jeux vidéo</a>, aussi disponible sur <a href="https://www.amazon.fr/dp/B0D8PZGDRR/" class="text-orange-500 hover:underline">Amazon</a>.</p>
			</div>
			<div>
				<p class="text-sm text-gray-500">Mai 2023</p>
				<p class="text-gray-700"><a href="https://exo7math.github.io/formules-exo7/" class="text-orange-500 hover:underline">Formules de mathématiques</a> : toutes les formules à savoir en L1/Math Sup en <a href="http://exo7.emath.fr/cours/formules.pdf" class="text-orange-500 hover:underline">un seul fichier</a> ! Y compris une courte <a href="http://exo7.emath.fr/cours/biographie.pdf" class="text-orange-500 hover:underline">biographie</a> des grands mathématiciens.</p>
			</div>
		</div>
	</section>
</div>
