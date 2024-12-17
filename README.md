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

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

<code>L'objectif de ce projet est de présenter de manière précise et interactive le fonctionnement de la propriété CSS Anchor. À travers des Web Components et des animations, nous explorons les différentes techniques de positionnement et de comportement offerts par cette nouvelle spécialité CSS.</code>

---

##  Features

<code>- Démonstration interactive utilisant Query Container et Anchor</code>
<code>- Exemple de différents positionnements avec la propriété Anchor</code>
<code>- Animations illustrant les comportements de placement</code>
<code>- Deux démos interactives montrant des approches distinctes de positionnement par Anchor</code>

---

##  Project Structure

```sh
└── AnchorMotionAPI/
    ├── README.md
    ├── index.html
    └── src
        ├── components
        └── styles.css
```


###  Project Index
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
##  Getting Started

###  Prerequisites

Before getting started with AnchorMotionAPI, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript


###  Installation

Install AnchorMotionAPI using one of the following methods:

**Build from source:**

1. Clone the AnchorMotionAPI repository:
```sh
❯ git clone https://github.com/MuuvaY/AnchorMotionAPI.git
```


###  Testing

Pour effectuer le test de l'application, ouvrez simplement le fichier html.

##  Contributing


1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/MuuvaY/AnchorMotionAPI.git
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/MuuvaY/AnchorMotionAPI/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=MuuvaY/AnchorMotionAPI">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---