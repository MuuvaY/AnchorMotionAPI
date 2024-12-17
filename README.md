<div align="left" style="position: relative;">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="right" width="30%" style="margin: -20px 0 0 20px;">
<h1>ANCHORMOTIONAPI</h1>
<p align="left">
	<em><code>Démonstration interactive de la nouvelle propriété CSS Anchor et des Web Components à travers un article</code></em>
</p>
<p align="left">
	<img src="https://img.shields.io/github/license/MuuvaY/AnchorMotionAPI?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/MuuvaY/AnchorMotionAPI?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/MuuvaY/AnchorMotionAPI?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/MuuvaY/AnchorMotionAPI?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="left"><!-- default option, no dependency badges. -->
</p>
<p align="left">
	<!-- default option, no dependency badges. -->
</p>
</div>
<br clear="right">

## Table du contenu
- [ Description](#description)
- [ Fonctionnalités](#fonctionnalités)
- [ Structure du projet](#structure-du-projet)
  - [ Index du projet](#structure-détaillé)
- [ Démarrer le site](#démarrer-le-site)
  - [ Prérequis](#prérequis)
  - [ Installation](#installation)
  - [ Test](#test)
- [ Contributeurs](#contributeurs)


---

## Description

<code>L'objectif de ce projet est de présenter de manière précise et interactive le fonctionnement de la propriété CSS Anchor. À travers des Web Components et des animations, nous explorons les différentes techniques de positionnement et de comportement offerts par cette nouvelle spécialité CSS.</code>

---

## Fonctionnalité

<code>- Démonstration interactive utilisant Query Container et Anchor</code><br>
<code>- Exemple de différents positionnements avec la propriété Anchor</code><br>
<code>- Animations illustrant les comportements de placement</code><br>
<code>- Deux démos interactives montrant des approches distinctes de positionnement par Anchor</code>

---

## Structure du projet

```sh
└── AnchorMotionAPI/
    ├── README.md
    ├── index.html
    └── src
        ├── components
        └── styles.css
```


### Structure détaillé
<details open>
	<summary><b><code>ANCHORMOTIONAPI/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/MuuvaY/AnchorMotionAPI/blob/master/index.html'>index.html</a></b></td>
				<td><code>Page d'accueil</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/MuuvaY/AnchorMotionAPI/blob/master/src/styles.css'>styles.css</a></b></td>
				<td><code>Page css du site</code></td>
			</tr>
			</table>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/MuuvaY/AnchorMotionAPI/blob/master/src/components/compatibility-section.js'>compatibility-section.js</a></b></td>
						<td><code>Petit web component pour réduire du code dans la section compatibility</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/MuuvaY/AnchorMotionAPI/blob/master/src/components/anchor-code.js'>anchor-code.js</a></b></td>
						<td><code>Web component utilisé pour mettre à jour du code dynamiquement</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/MuuvaY/AnchorMotionAPI/blob/master/src/components/anchor.js'>anchor.js</a></b></td>
						<td><code>Code qui va positionner les éléments de la deuxième démo</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/MuuvaY/AnchorMotionAPI/blob/master/src/components/show-code.js'>show-code.js</a></b></td>
						<td><code>Code utilisé pour les bouts de certains éléments de l'article</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/MuuvaY/AnchorMotionAPI/blob/master/src/components/anchor-btn.js'>anchor-btn.js</a></b></td>
						<td><code>Code utilisé pour les boutons qui vont avoir un impact sur les positions d'un élément</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/MuuvaY/AnchorMotionAPI/blob/master/src/components/anchor-exemple.js'>anchor-exemple.js</a></b></td>
						<td><code>Première demo utilisant un autre fonctionnement</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
## démarrer le site

### Prérequis

Aucun prérequis nécessaire, ce site n'utilise pas de langage demandant une installation


### Installation

Installer AnchorMotionAPI sur votre machine:

**Récupérer le dossier de travail:**

1. Clone AnchorMotionAPI repository:
```sh
❯ git clone https://github.com/MuuvaY/AnchorMotionAPI.git
```


### Test

Pour effectuer le test de l'application, ouvrez simplement le fichier html.

### Contributeurs

<p align="left">
   <a href="https://github.com{/MuuvaY/AnchorMotionAPI/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=MuuvaY/AnchorMotionAPI">
   </a>
</p>