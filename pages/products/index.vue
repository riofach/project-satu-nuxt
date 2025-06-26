<script setup lang="ts">
// Kita buat dummy data di sini.
// Nantinya, data ini akan kita ambil dari API.
const products = [
	{
		id: 1,
		name: 'Semangka',
		price: 30000,
		imageUrl: '/images/semangka.png', // Path relatif dari folder 'public'
		isNew: true,
	},
	{
		id: 2,
		name: 'Durian',
		price: 40000,
		imageUrl: '/images/durian.png',
		isNew: false,
	},
	{
		id: 3,
		name: 'Mangga',
		price: 40000,
		imageUrl: '/images/mangga.png',
		isNew: false,
	},
	{
		id: 4,
		name: 'Apel',
		price: 40000,
		imageUrl: '/images/apel.png',
		isNew: false,
	},
	{
		id: 5,
		name: 'Nanas',
		price: 40000,
		imageUrl: '/images/nanas.png',
		isNew: false,
	},
];

// Untuk menggunakan gambar dari folder 'assets', kita perlu cara khusus
// Tapi untuk kemudahan hari ini, pindahkan gambar-gambarmu ke folder 'public/images/'
// Sehingga path nya bisa langsung diakses dari root '/images/...'
</script>

<template>
	<div>
		<h2>Katalog Produk Kami</h2>
		<p>Temukan produk-produk buah terbaik pilihan kami.</p>

		<div class="product-grid">
			<ProductCard v-for="product in products" :key="product.id" :product="product" />
		</div>
	</div>
</template>

<style scoped>
.product-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 2rem;
	margin-top: 2rem;
}
</style>
