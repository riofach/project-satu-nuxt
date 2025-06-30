<template>
	<div>
		<header class="site-header">
			<div class="logo">
				<NuxtLink to="/">Project Pertama</NuxtLink>
			</div>
			<nav>
				<ul>
					<li><NuxtLink to="/">Home</NuxtLink></li>
					<li><NuxtLink to="/about">About</NuxtLink></li>
					<li><NuxtLink to="/contact">Contact</NuxtLink></li>
					<li><NuxtLink to="/products">Products</NuxtLink></li>
					<li><NuxtLink to="/service">Service</NuxtLink></li>
				</ul>
			</nav>
		</header>

		<main>
			<slot />
		</main>

		<footer class="site-footer">
			<p>Copyright © 2025 - Project Pertamaku</p>
		</footer>
	</div>
</template>

<style>
/* CSS Variables untuk tema yang konsisten */
:root {
	--primary-color: #3498db;
	--text-color-dark: #34495e;
	--text-color-light: #ecf0f1;
	--background-light: #f8f9fa;
	--white: #fff;
	--shadow-color: rgba(0, 0, 0, 0.05);
}

/* Reset dan gaya dasar body */
body {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
		sans-serif;
	padding: 0;
	margin: 0;
	background-color: var(--background-light);
	color: var(--text-color-dark);
	line-height: 1.6;
}

/* Header Modern */
.site-header {
	background-color: var(--white);
	padding: 1rem 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 2px 4px var(--shadow-color);
	position: sticky;
	top: 0;
	z-index: 100;
}

.logo a {
	font-size: 1.5rem;
	font-weight: 700;
	color: var(--primary-color);
	text-decoration: none;
}

/* Navigasi */
nav ul {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	gap: 1.5rem;
}

nav a {
	text-decoration: none;
	color: var(--text-color-dark);
	font-weight: 500;
	padding-bottom: 0.25rem;
	border-bottom: 2px solid transparent;
	transition: color 0.3s ease, border-bottom-color 0.3s ease;
}

nav a:hover {
	color: var(--primary-color);
}

/* Gaya untuk link yang aktif */
nav a.router-link-exact-active {
	color: var(--primary-color);
	border-bottom-color: var(--primary-color);
}

/* Konten Utama */
main {
	padding: 2rem;
	min-height: calc(100vh - 160px); /* Sesuaikan berdasarkan tinggi header/footer */
}

/* Footer Modern */
.site-footer {
	background-color: var(--text-color-dark);
	color: var(--text-color-light);
	text-align: center;
	padding: 2rem;
	font-size: 0.9rem;
}

.site-footer p {
	margin: 0;
}
</style>
