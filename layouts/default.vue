<template>
	<div>
		<header>
			<h1>Selamat Datang di Project Pertama!</h1>
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

		<hr />

		<main>
			<slot />
		</main>

		<hr />

		<footer>
			<p>Copyright © 2025 - Project Pertamaku</p>
		</footer>
	</div>
</template>

<style>
/* Kamu juga bisa pindahkan style dari app.vue ke sini */
body {
	font-family: sans-serif;
	padding: 0;
	margin: 0;
}
header,
main,
footer {
	padding: 1rem 2rem;
}
header {
	background-color: #f4f4f4;
}
nav ul {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	gap: 1rem;
}
</style>
