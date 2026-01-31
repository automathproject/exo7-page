<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Pour les profs - Exo7</title>
</svelte:head>

<div class="max-w-5xl mx-auto">
	<h1 class="text-4xl font-bold text-gray-800 mb-2">Pour les profs</h1>
	<p class="text-gray-600 mb-8">Ressources pédagogiques et exercices pour les enseignants</p>

	<!-- Les exercices -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Les exercices</h2>
		<div class="prose max-w-none mb-6">
			<p>
				Le projet Exo7 propose aux étudiants des fiches d'exercices de mathématique avec 
				indications et corrections de niveau L1-L2-L3. Nous proposons dorénavant des vidéos d'exercices et de cours de maths !
				Ces documents sont élaborés, corrigés par des enseignants du supérieur. 
				Le site propose en plus aux enseignants des exercices non corrigés.
			</p>
			<p>
				Toutes les fiches d'exercices corrigées sont rendues publiques
				dans les pages <a href="{base}/premiere-annee" class="text-orange-500 hover:underline">Première année</a>,
				<a href="{base}/deuxieme-annee" class="text-orange-500 hover:underline">Deuxième année</a> et
				<a href="{base}/troisieme-annee" class="text-orange-500 hover:underline">Troisième année</a>.
			</p>
		</div>
		
		<div class="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 mb-6">
			<h3 class="font-bold text-gray-800 mb-4">Téléchargement complet</h3>
			<p class="text-gray-700 mb-4">
				Vous pouvez récupérer tous les exercices (corrigés ou non) en un seul fichier. 
				Les exercices sont triés par thème, la numérotation absolue est entre crochets. 
				Vous avez aussi à votre disposition les fichiers sources des polycopiés de cours.
			</p>
			<ul class="space-y-4">
				<li class="flex items-start">
					<div class="flex-grow">
						<div class="font-bold text-gray-800">Tous les exercices au format PDF</div>
						<div class="text-sm text-gray-600 mt-1">
							<a href="http://exo7.emath.fr/ficpdf/ficall.pdf" target="_blank" class="text-orange-500 hover:underline">
								ficall.pdf
			</a>
							<span class="text-gray-500 ml-2">environ 8000 exercices, 20Mo</span>
						</div>
					</div>
				</li>
				<li class="flex items-start">
					<div class="flex-grow">
						<div class="font-bold text-gray-800">Tous les exercices au format LaTeX</div>
						<div class="text-sm text-gray-600 mt-1">
							<a href="http://exo7.emath.fr/ficpdf/ficall.tex" target="_blank" class="text-orange-500 hover:underline">
								ficall.tex
							</a>
							<span class="text-gray-500 ml-2">environ 8000 exercices, 8Mo</span>
						</div>
					</div>
				</li>
				<li class="flex items-start">
					<div class="flex-grow">
						<div class="font-bold text-gray-800">Les fichiers sources des cours au format LaTeX</div>
						<div class="text-sm text-gray-600 mt-1">
							<a href="https://github.com/exo7math" target="_blank" class="text-orange-500 hover:underline">
								github.com/exo7math
							</a>
						</div>
					</div>
				</li>
				<li class="flex items-start">
					<div class="flex-grow">
						<div class="font-bold text-gray-800">Tous les exercices en espagnol</div>
						<div class="text-sm text-gray-600 mt-1">
							<a href="http://exo7.emath.fr/fic_es/ficall_espanol.pdf" target="_blank" class="text-orange-500 hover:underline">
								ficall_espanol.pdf
							</a>
							&nbsp;&nbsp;&nbsp;
							<a href="https://github.com/exo7math/espanol-exo7" target="_blank" class="text-orange-500 hover:underline">
								Sources LaTeX
							</a>
							<span class="text-gray-500 ml-2 block">environ 8000 exercices, 20Mo</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</section>

	<!-- Auteurs -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Auteurs</h2>
		<div class="prose max-w-none">
			<ul class="space-y-3 text-gray-700">
				<li>
					<a href="http://exo7.emath.fr/ficpdf/fic00166.pdf" target="_blank" class="text-orange-500 hover:underline">600 nouveaux exercices</a> 
					(avec quelques corrections) de 
					<a href="https://perso.univ-rennes1.fr/christophe.mourougane/" target="_blank" class="text-orange-500 hover:underline">Christophe Mourougane</a>.
				</li>
				<li>
					Les exercices de concours de 
					<a href="http://michel.quercia.free.fr" target="_blank" class="text-orange-500 hover:underline">Michel Quercia</a>.
				</li>
				<li>
					Les exercices de prépas de 
					<a href="http://www.maths-france.fr" target="_blank" class="text-orange-500 hover:underline">J.-L. Rouget</a>.
				</li>
				<li>
					Contributeurs à la "Bibliothèque d'exercices" : 
					Arnaud Bodin, Eliane Cousquer, François Gourio, Pierre-Yves Legall, Pascal Ortiz, Franz Ridde 
					qui ont fourni un grand nombre d'exercices, et aussi Jean-François Barraud, Cécile Drouet, Cornélia Drutu, 
					Olivier Gineste, Vincent Guirardel, Jean-Marc Hécart, Arnaud Hilion, Jean-Marie Lescure, Isabelle Liousse, 
					Sylvain Maillot, Nicolas Marco, Bertrand Monthubert, Nadja Rebinguet, Sandrine Roussel, Marie-Hélène Vignal.
				</li>
				<li>
					Contributions récentes (L3) : Cornélia Drutu, Volker Mayer, Leonid Potyagailo, Anne-Marie Chollet, 
					Gijs Tuynman, Valery Gritsenko, Jean-François Barraud, Arnaud Bodin, Frédéric Sarkis.
				</li>
				<li>Les exercices de Matexo1.</li>
				<li>Martine Quinio (probabilités).</li>
			</ul>
			<p class="mt-6 text-gray-700 font-medium">
				Un grand merci à eux !
			</p>
			<p class="mt-4 text-gray-700">
				Si vous êtes enseignant, vous pouvez contribuer à ce projet en envoyant vos corrections, énoncés
				et en signalant toutes les fautes existantes. Il vous suffit d'écrire à 
				<a href="mailto:exo7@emath.fr" class="text-orange-500 hover:underline">exo7@emath.fr</a>.
			</p>
		</div>
	</section>

	<!-- Questions fréquentes -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Questions fréquentes</h2>
		<div class="space-y-4">
			<div class="bg-gray-50 p-4 rounded-lg">
				<h3 class="font-bold text-gray-800 mb-2">J'ai trouvé une faute dans un exercice</h3>
				<p class="text-gray-700">
					Dans ce cas, merci de 
					<a href="mailto:exo7@emath.fr" class="text-orange-500 hover:underline">signaler l'erreur</a>. 
					N'oubliez pas de mentionner le numéro absolu que vous trouvez soit en consultant les exercices en ligne, 
					soit dans le fichier LaTeX.
				</p>
			</div>
			
			<div class="bg-gray-50 p-4 rounded-lg">
				<h3 class="font-bold text-gray-800 mb-2">J'ai des problèmes avec les accents</h3>
				<p class="text-gray-700">
					Si vous obtenez du texte avec des symboles bizarres, changez l'encodage de votre fichier texte en <strong>utf8</strong>.
				</p>
			</div>
			
			<div class="bg-gray-50 p-4 rounded-lg">
				<h3 class="font-bold text-gray-800 mb-2">Où récupérer les images ?</h3>
				<p class="text-gray-700">
					Dans le répertoire 
					<a href="http://exo7.emath.fr/images/" target="_blank" class="text-orange-500 hover:underline">exo7.emath.fr/images/</a> ! 
					Notez que pour certaines images vous avez aussi le fichier source (par exemple .fig pour xfig, ou .maple pour des commandes Maple...).
				</p>
			</div>
			
			<div class="bg-gray-50 p-4 rounded-lg">
				<h3 class="font-bold text-gray-800 mb-2">Quelle est la licence d'utilisation ?</h3>
				<p class="text-gray-700">
					La licence d'utilisation d'Exo7 se trouve à la page 
					<a href="http://exo7.emath.fr/licence.html" target="_blank" class="text-orange-500 hover:underline">licence d'utilisation</a>.
				</p>
			</div>
		</div>
	</section>

	<!-- Partenaires -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-gray-800 mb-6">Partenaires</h2>
		<div class="prose max-w-none mb-6">
			<p class="text-gray-700">
				Le site et les vidéos sont produits par Arnaud Bodin (Université de Lille), 
				Léa Blanc-Centi (Université de Lille), Niels Borne (Université de Lille), 
				Benjamin Boutin (Université Rennes 1), Laura Desideri (Université de Lille), 
				Damien Mégy (Université de Lorraine) et Pascal Romon (Université Marne la Vallée).
			</p>
			<p class="text-gray-700">
				Merci à Muriel Boulakia et Nicolas Seguin, anciens membres de l'équipe.
			</p>
			<p class="text-gray-700">
				Le site Exo7 et les vidéos sont soutenus financièrement par l'Université de Lille et Unisciel ; 
				le site est hébergé par la SMAI et la SMF.
			</p>
		</div>
		
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
			<a href="http://www.unisciel.fr" target="_blank" class="hover:opacity-80 transition">
				<div class="text-center">
					<div class="text-4xl font-bold text-blue-600">UNISCIEL</div>
					<div class="text-sm text-gray-600">Université des Sciences en Ligne</div>
				</div>
			</a>
			<a href="http://www.univ-lille.fr" target="_blank" class="hover:opacity-80 transition">
				<div class="text-center">
					<div class="text-3xl font-bold text-red-600">Université</div>
					<div class="text-2xl font-bold text-red-600">de Lille</div>
				</div>
			</a>
			<a href="http://www.smai.emath.fr/" target="_blank" class="hover:opacity-80 transition">
				<div class="text-center">
					<div class="text-2xl font-bold text-purple-700">SMAI</div>
					<div class="text-xs text-gray-600">Société de Mathématiques Appliquées et Industrielles</div>
				</div>
			</a>
			<a href="http://www.smf.emath.fr/" target="_blank" class="hover:opacity-80 transition">
				<div class="text-center">
					<div class="text-2xl font-bold text-green-700">SMF</div>
					<div class="text-xs text-gray-600">Société Mathématique de France</div>
				</div>
			</a>
		</div>
	</section>
</div>
