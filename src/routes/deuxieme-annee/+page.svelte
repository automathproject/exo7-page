<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Deuxième année - Exo7</title>
</svelte:head>

<div class="max-w-5xl mx-auto">
	<h1 class="text-4xl font-bold text-gray-800 mb-2">Deuxième année</h1>
	<p class="text-gray-600 mb-8">Exercices de mathématiques avec indications et corrections de niveau L2 et Math Spé</p>
	
	<!-- Menu rapide -->
	<nav class="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
		<h2 class="font-bold text-gray-800 mb-3">Accès rapide</h2>
		<ul class="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
			<li><a href="#cours-analyse" class="text-orange-500 hover:underline">Cours d'analyse</a></li>
			<li><a href="#fpv" class="text-orange-500 hover:underline">Fonctions de plusieurs variables</a></li>
			<li><a href="#algebre" class="text-orange-500 hover:underline">Algèbre</a></li>
			<li><a href="#proba" class="text-orange-500 hover:underline">Probabilité</a></li>
			<li><a href="#exercices" class="text-orange-500 hover:underline">Exercices math-spé</a></li>
		</ul>
	</nav>

	<!-- Cours d'analyse -->
	<section id="cours-analyse" class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Cours d'analyse</h2>
		<ul class="space-y-4">
			<li class="border-l-4 border-orange-500 pl-4">
				<div class="text-lg font-bold text-gray-800">Cours : Fonctions de plusieurs variables (6 chapitres)</div>
				<div class="text-sm text-gray-600 mt-1">
					<a href="http://exo7.emath.fr/cours/cours-fpv.pdf" target="_blank" class="text-orange-500 hover:underline">cours-fpv.pdf</a>
				</div>
			</li>
			<li class="border-l-4 border-orange-500 pl-4">
				<div class="text-lg font-bold text-gray-800">Cours : Calcul différentiel</div>
				<div class="text-sm text-gray-600 mt-1">
					<a href="http://exo7.emath.fr/cours/ch_calculdiff.pdf" target="_blank" class="text-orange-500 hover:underline">ch_calculdiff.pdf</a>
				</div>
			</li>
			<li class="border-l-4 border-orange-500 pl-4">
				<div class="text-lg font-bold text-gray-800">Cours : Matrice jacobienne</div>
				<div class="text-sm text-gray-600 mt-1">
					<a href="http://exo7.emath.fr/cours/ch_jacob.pdf" target="_blank" class="text-orange-500 hover:underline">ch_jacob.pdf</a>
				</div>
			</li>
			<li class="border-l-4 border-orange-500 pl-4">
				<div class="text-lg font-bold text-gray-800">Cours : Séries</div>
				<div class="text-sm text-gray-600 mt-1">
					<a href="http://exo7.emath.fr/cours/ch_series.pdf" target="_blank" class="text-orange-500 hover:underline">ch_series.pdf</a>
				</div>
			</li>
			<li class="border-l-4 border-orange-500 pl-4">
				<div class="text-lg font-bold text-gray-800">Cours : Intégrales impropres</div>
				<div class="text-sm text-gray-600 mt-1">
					<a href="http://exo7.emath.fr/cours/ch_intimp.pdf" target="_blank" class="text-orange-500 hover:underline">ch_intimp.pdf</a>
					&nbsp;&nbsp;&nbsp;
					<a href="https://www.youtube.com/playlist?list=PL024XGD7WCIFXsa-8p7Ey0Xu7dJxia5kg" target="_blank" class="text-orange-500 hover:underline">vidéos</a>
				</div>
			</li>
		</ul>
	</section>

	<!-- Fonctions de plusieurs variables (nouveau) -->
	<section id="fpv" class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Fonctions de plusieurs variables (nouveau)</h2>
		<div class="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-4">
			<p class="font-bold text-green-800 mb-2">📘 Nouveau contenu !</p>
			<p class="text-gray-700">Cours complet et exercices corrigés sur les fonctions de plusieurs variables.</p>
		</div>
		<ul class="space-y-3">
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Cours : Fonctions de plusieurs variables (6 chapitres)</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/cours/cours-fpv.pdf" target="_blank" class="text-orange-500 hover:underline">cours-fpv.pdf</a>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Tous les exercices</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/cours/all-exercices-fpv.pdf" target="_blank" class="text-orange-500 hover:underline">all-exercices-fpv.pdf</a>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Exercices par chapitre :</div>
				<ul class="text-sm mt-2 space-y-1 ml-4">
					<li>• <a href="http://exo7.emath.fr/cours/exercices-fpv-0.pdf" target="_blank" class="text-orange-500 hover:underline">Mise en route</a> (6 exercices)</li>
					<li>• <a href="http://exo7.emath.fr/cours/exercices-fpv-1.pdf" target="_blank" class="text-orange-500 hover:underline">Fonctions de plusieurs variables</a> (14 exercices)</li>
					<li>• <a href="http://exo7.emath.fr/cours/exercices-fpv-2.pdf" target="_blank" class="text-orange-500 hover:underline">Notions de topologie</a> (11 exercices)</li>
					<li>• <a href="http://exo7.emath.fr/cours/exercices-fpv-3.pdf" target="_blank" class="text-orange-500 hover:underline">Calcul différentiel</a> (11 exercices)</li>
					<li>• <a href="http://exo7.emath.fr/cours/exercices-fpv-5.pdf" target="_blank" class="text-orange-500 hover:underline">Gradient - TAF</a> (7 exercices)</li>
					<li>• <a href="http://exo7.emath.fr/cours/exercices-fpv-6.pdf" target="_blank" class="text-orange-500 hover:underline">Extremums</a> (11 exercices)</li>
				</ul>
			</li>
		</ul>
	</section>

	<!-- Algèbre -->
	<section id="algebre" class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Algèbre</h2>
		<ul class="space-y-4">
			<li class="border-l-4 border-orange-500 pl-4">
				<div class="text-lg font-bold text-gray-800">Cours : Valeurs propres, vecteurs propres</div>
				<div class="text-sm text-gray-600 mt-1">
					<a href="http://exo7.emath.fr/cours/ch_vp.pdf" target="_blank" class="text-orange-500 hover:underline">ch_vp.pdf</a>
				</div>
			</li>
			<li class="border-l-4 border-orange-500 pl-4">
				<div class="text-lg font-bold text-gray-800">Cours : Diagonalisation</div>
				<div class="text-sm text-gray-600 mt-1">
					<a href="http://exo7.emath.fr/cours/ch_diagon.pdf" target="_blank" class="text-orange-500 hover:underline">ch_diagon.pdf</a>
				</div>
			</li>
			<li class="border-l-4 border-orange-500 pl-4">
				<div class="text-lg font-bold text-gray-800">Cours : Polynômes d'endomorphismes</div>
				<div class="text-sm text-gray-600 mt-1">
					<a href="http://exo7.emath.fr/cours/ch_polyendo.pdf" target="_blank" class="text-orange-500 hover:underline">ch_polyendo.pdf</a>
				</div>
			</li>
			<li class="border-l-4 border-orange-500 pl-4">
				<div class="text-lg font-bold text-gray-800">Cours : Décomposition de Dunford et réduction de Jordan</div>
				<div class="text-sm text-gray-600 mt-1">
					<a href="http://exo7.emath.fr/cours/ch_jordan.pdf" target="_blank" class="text-orange-500 hover:underline">ch_jordan.pdf</a>
				</div>
			</li>
			<li class="border-l-4 border-orange-500 pl-4">
				<div class="text-lg font-bold text-gray-800">Cours : Systèmes différentiels</div>
				<div class="text-sm text-gray-600 mt-1">
					<a href="http://exo7.emath.fr/cours/ch_sysdiff.pdf" target="_blank" class="text-orange-500 hover:underline">ch_sysdiff.pdf</a>
				</div>
			</li>
		</ul>
	</section>

	<!-- Probabilité -->
	<section id="proba" class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Probabilité</h2>
		<div class="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-4">
			<p class="text-sm text-gray-700">
				Exercices de Martine Quinio Benamo. Pour plus de contenu théorique et pratique, consultez l'ouvrage 
				<em>"Probabilités et statistique aujourd'hui"</em>, Martine Quinio Benamo, L'Harmattan (2009).
			</p>
		</div>
		<ul class="space-y-3">
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Probabilité et dénombrement ; indépendance</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00150.pdf" target="_blank" class="text-orange-500 hover:underline">fic00150.pdf</a>
					<span class="text-gray-600">(9 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Probabilité conditionnelle</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00151.pdf" target="_blank" class="text-orange-500 hover:underline">fic00151.pdf</a>
					<span class="text-gray-600">(13 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Variables aléatoires discrètes</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00152.pdf" target="_blank" class="text-orange-500 hover:underline">fic00152.pdf</a>
					<span class="text-gray-600">(9 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Loi normale et approximations</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00153.pdf" target="_blank" class="text-orange-500 hover:underline">fic00153.pdf</a>
					<span class="text-gray-600">(6 exercices)</span>
				</div>
			</li>
		</ul>
	</section>

	<!-- Exercices de math-spé -->
	<section id="exercices" class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Exercices de math-spé</h2>
		
		<div class="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-6">
			<h3 class="font-bold text-yellow-900 mb-2">📚 M. Quercia - Exercices concours</h3>
			<p class="text-sm text-gray-700 mb-2">
				Grande fiche de <a href="http://michel.quercia.free.fr" target="_blank" class="text-orange-500 hover:underline">Michel Quercia</a> 
				pour les élèves préparant les concours aux grandes écoles.
			</p>
			<a href="http://exo7.emath.fr/ficpdf/fic00080.pdf" target="_blank" class="text-orange-500 hover:underline font-bold">
				fic00080.pdf (2174 exercices)
			</a>
		</div>

		<div class="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
			<h3 class="font-bold text-purple-900 mb-2">📚 J.-L. Rouget - Exercices math-spé</h3>
			<p class="text-sm text-gray-700 mb-3">
				Exercices à retrouver sur <a href="http://www.maths-france.fr" target="_blank" class="text-orange-500 hover:underline">maths-france.fr</a>
			</p>
			<div class="grid grid-cols-2 gap-2 text-sm">
				<div>• Algèbre linéaire I (35 ex.)</div>
				<div>• Algèbre linéaire II (31 ex.)</div>
				<div>• Déterminants (16 ex.)</div>
				<div>• Réduction (37 ex.)</div>
				<div>• Séries (25 ex.)</div>
				<div>• Intégration (13 ex.)</div>
				<div>• Séries de Fourier (5 ex.)</div>
				<div>• Espaces euclidiens (20 ex.)</div>
				<div>• Topologie (15 ex.)</div>
				<div>... et bien d'autres !</div>
			</div>
		</div>
	</section>

	<!-- Lien vers toutes les fiches -->
	<section class="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 text-center">
		<p class="text-lg mb-4">
			<strong>Plus d'exercices disponibles !</strong>
		</p>
		<p class="text-gray-700 mb-4">
			Consultez l'ancienne page pour accéder à tous les exercices détaillés de L2.
		</p>
		<a href="http://exo7.emath.fr/deux.html" target="_blank" class="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-bold">
			Voir tous les exercices L2
		</a>
	</section>
</div>
