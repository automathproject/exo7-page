<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Première année - Exo7</title>
</svelte:head>

<div class="max-w-5xl mx-auto">
	<h1 class="text-4xl font-bold text-gray-800 mb-2">Première année</h1>
	<p class="text-gray-600 mb-8">Cours de maths, exercices avec corrections et vidéos de mathématiques avec niveau L1/Math Sup</p>
	
	<!-- Livres disponibles -->
	<section class="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 mb-8">
		<p class="text-center mb-4">
			<strong>Le cours disponible en livres !</strong>
			<a href="http://www.amazon.fr/dp/1517683637" class="text-orange-500 hover:underline">Algèbre</a> et 
			<a href="http://www.amazon.fr/dp/1522821643" class="text-orange-500 hover:underline">Analyse</a>.
			En vente à prix coûtant et toujours téléchargeable gratuitement !
		</p>
	</section>
	
	<!-- Menu rapide -->
	<nav class="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
		<h2 class="font-bold text-gray-800 mb-3">Accès rapide</h2>
		<ul class="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
			<li><a href="#cours-exo7" class="text-orange-500 hover:underline">Cours de première année</a></li>
			<li><a href="#algebre-video" class="text-orange-500 hover:underline">Algèbre (avec vidéos)</a></li>
			<li><a href="#analyse-video" class="text-orange-500 hover:underline">Analyse (avec vidéos)</a></li>
			<li><a href="#algebre-lineaire" class="text-orange-500 hover:underline">Algèbre linéaire</a></li>
		</ul>
	</nav>

	<!-- Cours Exo7 -->
	<section id="cours-exo7" class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Cours Exo7</h2>
		<ul class="space-y-4">
			<li class="border-l-4 border-orange-500 pl-4">
				<a href="http://exo7.emath.fr/cours/livre-algebre-1.pdf" target="_blank" class="text-lg font-bold text-gray-800 hover:text-orange-500">
					Algèbre - Cours de première année
				</a>
				<div class="text-sm text-gray-600 mt-1">
					<a href="http://exo7.emath.fr/cours/livre-algebre-1.pdf" target="_blank" class="text-orange-500 hover:underline">livre-algebre-1.pdf</a>
				</div>
			</li>
			<li class="border-l-4 border-orange-500 pl-4">
				<a href="http://exo7.emath.fr/cours/livre-analyse-1.pdf" target="_blank" class="text-lg font-bold text-gray-800 hover:text-orange-500">
					Analyse - Cours de première année
				</a>
				<div class="text-sm text-gray-600 mt-1">
					<a href="http://exo7.emath.fr/cours/livre-analyse-1.pdf" target="_blank" class="text-orange-500 hover:underline">livre-analyse-1.pdf</a>
				</div>
			</li>
			<li class="border-l-4 border-orange-500 pl-4">
				<a href="http://exo7.emath.fr/cours/livre-geometrie.pdf" target="_blank" class="text-lg font-bold text-gray-800 hover:text-orange-500">
					Géométrie - Quelques chapitres de géométrie
				</a>
				<div class="text-sm text-gray-600 mt-1">
					<a href="http://exo7.emath.fr/cours/livre-geometrie.pdf" target="_blank" class="text-orange-500 hover:underline">livre-geometrie.pdf</a>
				</div>
			</li>
			<li class="border-l-4 border-orange-500 pl-4">
				<a href="http://exo7.emath.fr/cours/livre-algorithmes.pdf" target="_blank" class="text-lg font-bold text-gray-800 hover:text-orange-500">
					Algorithmes - Mathématiques en lien avec l'informatique
				</a>
				<div class="text-sm text-gray-600 mt-1">
					<a href="http://exo7.emath.fr/cours/livre-algorithmes.pdf" target="_blank" class="text-orange-500 hover:underline">livre-algorithmes.pdf</a>
				</div>
			</li>
			<li class="border-l-4 border-orange-500 pl-4">
				<a href="https://exo7math.github.io/formules-exo7/" target="_blank" class="text-lg font-bold text-gray-800 hover:text-orange-500">
					Formules de mathématiques
				</a>
				<div class="text-sm text-gray-600 mt-1">
					<a href="http://exo7.emath.fr/cours/formules.pdf" target="_blank" class="text-orange-500 hover:underline">formules.pdf</a>
				</div>
			</li>
		</ul>
	</section>

	<!-- Algèbre avec vidéos -->
	<section id="algebre-video" class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Algèbre avec vidéo</h2>
		<ul class="space-y-3">
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Cours : Nombres complexes</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/cours/ch_complexes.pdf" target="_blank" class="text-orange-500 hover:underline">ch_complexes.pdf</a>
					&nbsp;&nbsp;&nbsp;
					<a href="http://www.youtube.com/playlist?list=PLDE14ADCB2510048B" target="_blank" class="text-orange-500 hover:underline">vidéos</a>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Exercices : Nombres complexes</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00001.pdf" target="_blank" class="text-orange-500 hover:underline">fic00001.pdf</a>
					&nbsp;&nbsp;&nbsp;
					<a href="http://www.youtube.com/playlist?list=PLDE14ADCB2510048B" target="_blank" class="text-orange-500 hover:underline">vidéos</a>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Cours : Logique et raisonnements</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/cours/ch_logique.pdf" target="_blank" class="text-orange-500 hover:underline">ch_logique.pdf</a>
					&nbsp;&nbsp;&nbsp;
					<a href="http://www.youtube.com/playlist?list=PL8CE6188299CCFA23" target="_blank" class="text-orange-500 hover:underline">vidéos</a>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Cours : Ensembles et applications</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/cours/ch_ensembles.pdf" target="_blank" class="text-orange-500 hover:underline">ch_ensembles.pdf</a>
					&nbsp;&nbsp;&nbsp;
					<a href="http://www.youtube.com/playlist?list=PL6690366268FBF2C0" target="_blank" class="text-orange-500 hover:underline">vidéos</a>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Cours : Arithmétique</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/cours/ch_arithmetique.pdf" target="_blank" class="text-orange-500 hover:underline">ch_arithmetique.pdf</a>
					&nbsp;&nbsp;&nbsp;
					<a href="http://www.youtube.com/playlist?list=PLBCBC57F999DDCAA5" target="_blank" class="text-orange-500 hover:underline">vidéos</a>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Cours : Polynômes</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/cours/ch_polynomes.pdf" target="_blank" class="text-orange-500 hover:underline">ch_polynomes.pdf</a>
					&nbsp;&nbsp;&nbsp;
					<a href="http://www.youtube.com/playlist?list=PL024XGD7WCIHMAwUrUW5BAmHu-EiuO9nU" target="_blank" class="text-orange-500 hover:underline">vidéos</a>
				</div>
			</li>
		</ul>
		<p class="text-sm text-gray-600 mt-4 italic">
			... et bien d'autres ! Voir la page complète pour tous les chapitres.
		</p>
	</section>

	<!-- Analyse avec vidéos -->
	<section id="analyse-video" class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Analyse avec vidéos</h2>
		<ul class="space-y-3">
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Cours : Les nombres réels</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/cours/ch_reels.pdf" target="_blank" class="text-orange-500 hover:underline">ch_reels.pdf</a>
					&nbsp;&nbsp;&nbsp;
					<a href="http://www.youtube.com/playlist?list=PL7FE0CECE4B4C0FB8" target="_blank" class="text-orange-500 hover:underline">vidéos</a>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Cours : Suites</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/cours/ch_suites.pdf" target="_blank" class="text-orange-500 hover:underline">ch_suites.pdf</a>
					&nbsp;&nbsp;&nbsp;
					<a href="http://www.youtube.com/playlist?list=PL20E5F69BB88FEDEE" target="_blank" class="text-orange-500 hover:underline">vidéos</a>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Cours : Fonctions</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/cours/ch_fonctions.pdf" target="_blank" class="text-orange-500 hover:underline">ch_fonctions.pdf</a>
					&nbsp;&nbsp;&nbsp;
					<a href="http://www.youtube.com/playlist?list=PL02B78D753AFA8098" target="_blank" class="text-orange-500 hover:underline">vidéos</a>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Cours : Dérivée d'une fonction</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/cours/ch_derivee.pdf" target="_blank" class="text-orange-500 hover:underline">ch_derivee.pdf</a>
					&nbsp;&nbsp;&nbsp;
					<a href="http://www.youtube.com/playlist?list=PLD702C0EC85AB2A5A" target="_blank" class="text-orange-500 hover:underline">vidéos</a>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Cours : Intégrales</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/cours/ch_int.pdf" target="_blank" class="text-orange-500 hover:underline">ch_int.pdf</a>
					&nbsp;&nbsp;&nbsp;
					<a href="http://www.youtube.com/playlist?list=PL8ACBA51760D782A8" target="_blank" class="text-orange-500 hover:underline">vidéos</a>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Cours : Développements limités</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/cours/ch_dl.pdf" target="_blank" class="text-orange-500 hover:underline">ch_dl.pdf</a>
					&nbsp;&nbsp;&nbsp;
					<a href="http://www.youtube.com/playlist?list=PL024XGD7WCIHHlscC-_sfMgKyoeiGSixj" target="_blank" class="text-orange-500 hover:underline">vidéos</a>
				</div>
			</li>
		</ul>
		<p class="text-sm text-gray-600 mt-4 italic">
			... et bien d'autres ! Voir la page complète pour tous les chapitres.
		</p>
	</section>

	<!-- Algèbre linéaire -->
	<section id="algebre-lineaire" class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Algèbre linéaire avec vidéos</h2>
		<ul class="space-y-3">
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Cours : Systèmes linéaires</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/cours/ch_syslin.pdf" target="_blank" class="text-orange-500 hover:underline">ch_syslin.pdf</a>
					&nbsp;&nbsp;&nbsp;
					<a href="http://www.youtube.com/playlist?list=PL024XGD7WCIFSxatDf77naZwvNPiPbAe4" target="_blank" class="text-orange-500 hover:underline">vidéos</a>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Cours : Matrices</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/cours/ch_matrices.pdf" target="_blank" class="text-orange-500 hover:underline">ch_matrices.pdf</a>
					&nbsp;&nbsp;&nbsp;
					<a href="http://www.youtube.com/playlist?list=PL024XGD7WCIHDg6tgbbb9Xa18cPq7eSpg" target="_blank" class="text-orange-500 hover:underline">vidéos</a>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Cours : Espaces vectoriels</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/cours/ch_ev.pdf" target="_blank" class="text-orange-500 hover:underline">ch_ev.pdf</a>
					&nbsp;&nbsp;&nbsp;
					<a href="http://www.youtube.com/playlist?list=PL1E86FABE7386FC5A" target="_blank" class="text-orange-500 hover:underline">vidéos</a>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Cours : Déterminants</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/cours/ch_determinants.pdf" target="_blank" class="text-orange-500 hover:underline">ch_determinants.pdf</a>
					&nbsp;&nbsp;&nbsp;
					<a href="http://www.youtube.com/playlist?list=PL024XGD7WCIGNiu5N6GPuLXQVgsHzCM2Q" target="_blank" class="text-orange-500 hover:underline">vidéos</a>
				</div>
			</li>
		</ul>
	</section>

	<!-- Lien vers la chaîne YouTube -->
	<section class="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 text-center">
		<p class="text-lg mb-4">
			<strong>Toutes les vidéos sont disponibles sur YouTube !</strong>
		</p>
		<a href="http://www.youtube.com/Exo7Math" target="_blank" class="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-bold">
			Chaîne YouTube Exo7Math
		</a>
	</section>
</div>
