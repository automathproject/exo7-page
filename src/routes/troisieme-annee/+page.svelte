<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Troisième année - Exo7</title>
</svelte:head>

<div class="max-w-5xl mx-auto">
	<h1 class="text-4xl font-bold text-gray-800 mb-2">Troisième année</h1>
	<p class="text-gray-600 mb-8">Exercices de mathématiques avec indications et corrections de niveau licence L3</p>
	
	<!-- Menu rapide -->
	<nav class="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
		<h2 class="font-bold text-gray-800 mb-3">Accès rapide</h2>
		<ul class="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
			<li><a href="#integration" class="text-orange-500 hover:underline">Mesure et intégration</a></li>
			<li><a href="#groupes" class="text-orange-500 hover:underline">Théorie des groupes</a></li>
			<li><a href="#topologie" class="text-orange-500 hover:underline">Topologie</a></li>
			<li><a href="#anneaux" class="text-orange-500 hover:underline">Anneaux</a></li>
			<li><a href="#calcul-diff" class="text-orange-500 hover:underline">Calcul différentiel</a></li>
			<li><a href="#complexe" class="text-orange-500 hover:underline">Analyse complexe</a></li>
		</ul>
	</nav>

	<!-- Mesure et intégration -->
	<section id="integration" class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Mesure et intégration</h2>
		<div class="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-4">
			<p class="text-sm text-gray-700">
				Exercices de Barbara Tumpach, relecture de François Lescure. 
				Consultez le <a href="http://exo7.emath.fr/ficpdf/MesureIntegration.pdf" target="_blank" class="text-orange-500 hover:underline">polycopié de cours</a> 
				de Marc Troyanov correspondant aux exercices.
			</p>
		</div>
		<ul class="space-y-3">
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Intégrale de Riemann</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00141.pdf" target="_blank" class="text-orange-500 hover:underline">fic00141.pdf</a>
					<span class="text-gray-600">(8 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Intégrales généralisées et théorie de la mesure</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00142.pdf" target="_blank" class="text-orange-500 hover:underline">fic00142.pdf</a>
					<span class="text-gray-600">(3 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Théorème de Carathéodory, calcul d'aire et de volume</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00143.pdf" target="_blank" class="text-orange-500 hover:underline">fic00143.pdf</a>
					<span class="text-gray-600">(5 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Fonctions mesurables, intégrale de Lebesgue</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00144.pdf" target="_blank" class="text-orange-500 hover:underline">fic00144.pdf</a>
					<span class="text-gray-600">(6 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Théorème de convergence monotone, dominée et lemme de Fatou</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00145.pdf" target="_blank" class="text-orange-500 hover:underline">fic00145.pdf</a>
					<span class="text-gray-600">(15 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Espaces Lp</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00146.pdf" target="_blank" class="text-orange-500 hover:underline">fic00146.pdf</a>
					<span class="text-gray-600">(3 exercices)</span>
				</div>
			</li>
		</ul>
	</section>

	<!-- Théorie des groupes -->
	<section id="groupes" class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Théorie des groupes</h2>
		<ul class="space-y-3">
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Groupes, sous-groupes, ordre</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00020.pdf" target="_blank" class="text-orange-500 hover:underline">fic00020.pdf</a>
					<span class="text-gray-600">(35 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Morphisme, sous-groupe distingué, quotient</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00021.pdf" target="_blank" class="text-orange-500 hover:underline">fic00021.pdf</a>
					<span class="text-gray-600">(30 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Action de groupe</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00022.pdf" target="_blank" class="text-orange-500 hover:underline">fic00022.pdf</a>
					<span class="text-gray-600">(24 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Théorèmes de Sylow</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00023.pdf" target="_blank" class="text-orange-500 hover:underline">fic00023.pdf</a>
					<span class="text-gray-600">(20 exercices)</span>
				</div>
			</li>
		</ul>
	</section>

	<!-- Topologie -->
	<section id="topologie" class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Topologie</h2>
		<ul class="space-y-3">
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Rappels</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00036.pdf" target="_blank" class="text-orange-500 hover:underline">fic00036.pdf</a>
					<span class="text-gray-600">(8 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Topologie générale</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00037.pdf" target="_blank" class="text-orange-500 hover:underline">fic00037.pdf</a>
					<span class="text-gray-600">(13 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Continuité</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00038.pdf" target="_blank" class="text-orange-500 hover:underline">fic00038.pdf</a>
					<span class="text-gray-600">(17 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Compacité</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00039.pdf" target="_blank" class="text-orange-500 hover:underline">fic00039.pdf</a>
					<span class="text-gray-600">(13 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Connexité</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00040.pdf" target="_blank" class="text-orange-500 hover:underline">fic00040.pdf</a>
					<span class="text-gray-600">(9 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Espaces complets</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00041.pdf" target="_blank" class="text-orange-500 hover:underline">fic00041.pdf</a>
					<span class="text-gray-600">(16 exercices)</span>
				</div>
			</li>
		</ul>
	</section>

	<!-- Anneaux -->
	<section id="anneaux" class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Anneaux</h2>
		<ul class="space-y-3">
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Congruence</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00029.pdf" target="_blank" class="text-orange-500 hover:underline">fic00029.pdf</a>
					<span class="text-gray-600">(9 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Anneaux et idéaux</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00030.pdf" target="_blank" class="text-orange-500 hover:underline">fic00030.pdf</a>
					<span class="text-gray-600">(12 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Anneaux de polynômes I</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00031.pdf" target="_blank" class="text-orange-500 hover:underline">fic00031.pdf</a>
					<span class="text-gray-600">(19 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Anneaux de polynômes II, anneaux quotients</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00032.pdf" target="_blank" class="text-orange-500 hover:underline">fic00032.pdf</a>
					<span class="text-gray-600">(12 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Lemme Chinois</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00034.pdf" target="_blank" class="text-orange-500 hover:underline">fic00034.pdf</a>
					<span class="text-gray-600">(9 exercices)</span>
				</div>
			</li>
		</ul>
	</section>

	<!-- Calcul différentiel -->
	<section id="calcul-diff" class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Calcul différentiel</h2>
		<ul class="space-y-3">
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Préalables, rappels</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00046.pdf" target="_blank" class="text-orange-500 hover:underline">fic00046.pdf</a>
					<span class="text-gray-600">(9 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Applications différentiables</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00047.pdf" target="_blank" class="text-orange-500 hover:underline">fic00047.pdf</a>
					<span class="text-gray-600">(15 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Théorème d'inversion locale, difféomorphismes</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00049.pdf" target="_blank" class="text-orange-500 hover:underline">fic00049.pdf</a>
					<span class="text-gray-600">(14 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Sous-variétés</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00051.pdf" target="_blank" class="text-orange-500 hover:underline">fic00051.pdf</a>
					<span class="text-gray-600">(6 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Différentielles secondes, extremums</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00052.pdf" target="_blank" class="text-orange-500 hover:underline">fic00052.pdf</a>
					<span class="text-gray-600">(4 exercices)</span>
				</div>
			</li>
		</ul>
	</section>

	<!-- Analyse complexe -->
	<section id="complexe" class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Analyse complexe</h2>
		<div class="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-4">
			<p class="text-sm text-gray-700">
				Exercices de Jean-François Burnol, corrections par Volker Mayer. 
				Consultez le <a href="http://exo7.emath.fr/ficpdf/poly_burnol.pdf" target="_blank" class="text-orange-500 hover:underline">polycopié de cours</a> 
				de <a href="http://jf.burnol.free.fr/ens.html" target="_blank" class="text-orange-500 hover:underline">Jean-François Burnol</a>.
			</p>
		</div>
		<ul class="space-y-3">
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Dérivabilité au sens complexe, fonctions analytiques</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00075.pdf" target="_blank" class="text-orange-500 hover:underline">fic00075.pdf</a>
					<span class="text-gray-600">(23 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Intégrales</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00076.pdf" target="_blank" class="text-orange-500 hover:underline">fic00076.pdf</a>
					<span class="text-gray-600">(14 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Prolongement analytique et résidus</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00077.pdf" target="_blank" class="text-orange-500 hover:underline">fic00077.pdf</a>
					<span class="text-gray-600">(31 exercices)</span>
				</div>
			</li>
			<li class="bg-gray-50 p-4 rounded">
				<div class="font-bold text-gray-800">Jusqu'à l'infini</div>
				<div class="text-sm mt-2">
					<a href="http://exo7.emath.fr/ficpdf/fic00078.pdf" target="_blank" class="text-orange-500 hover:underline">fic00078.pdf</a>
					<span class="text-gray-600">(28 exercices)</span>
				</div>
			</li>
		</ul>
	</section>

	<!-- Lien vers l'ancienne page -->
	<section class="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 text-center">
		<p class="text-lg mb-4">
			<strong>Plus d'exercices disponibles !</strong>
		</p>
		<p class="text-gray-700 mb-4">
			Analyse numérique, devoirs à la maison, et plus encore...
		</p>
		<a href="http://exo7.emath.fr/trois.html" target="_blank" class="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-bold">
			Voir tous les exercices L3
		</a>
	</section>
</div>
