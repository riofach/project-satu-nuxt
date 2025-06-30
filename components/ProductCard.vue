<script lang="ts" setup>
// Kita definisikan 'props' yang akan atau bisa diterima oleh komponen ini.
// Komponen ini mengharapkan sebuah objek 'product' yang memiliki properti id, name, price, dan imageUrl.
defineProps({
	product: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<div class="card">
		<p v-if="product.isNew" class="card-badge">Baru!</p>
		<img :src="product.imageUrl" :alt="product.name" class="card-img" />
		<div class="card-body">
			<h3 class="card-title">{{ product.name }}</h3>
			<p class="card-price">Rp {{ product.price.toLocaleString('id-ID') }}</p>
			<!-- <button class="card-button">Lihat Detail</button> -->
			<NuxtLink :to="`/products/${product.id}`" class="card-button">Lihat Detail</NuxtLink>
		</div>
	</div>
</template>

<style scoped>
/* 'scoped' artinya style ini HANYA berlaku untuk komponen ProductCard.vue 
   dan tidak akan bocor ke komponen lain. Ini sangat penting! */
.card {
	background-color: white;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	position: relative; /* Diperlukan untuk positioning badge */
	display: flex;
	flex-direction: column;
	height: 100%; /* Membuat kartu memiliki tinggi yang sama */
}
.card:hover {
	transform: translateY(-8px);
	box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.card-badge {
	position: absolute;
	top: 1rem;
	right: 1rem;
	background-color: #e74c3c;
	color: white;
	padding: 0.25rem 0.75rem;
	border-radius: 1rem;
	font-size: 0.8rem;
	font-weight: 600;
	z-index: 1;
}

.card-img {
	width: 100%;
	height: 200px;
	object-fit: cover; /* Agar gambar tidak gepeng */
}
.card-body {
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	flex-grow: 1; /* Membuat body card mengisi ruang yang tersedia */
}
.card-title {
	margin-top: 0;
	margin-bottom: 0.5rem;
	font-size: 1.25rem;
	font-weight: 600;
	color: #333;
}
.card-price {
	color: #3498db;
	font-size: 1.1rem;
	font-weight: bold;
	margin-bottom: 1.5rem;
}
.card-button {
	display: block;
	width: fit-content; /* Membuat lebar sesuai konten */
	padding: 0.75rem 2rem; /* Menyesuaikan padding agar terlihat bagus */
	background-color: #3498db;
	color: white;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	text-align: center;
	text-decoration: none; /* Menghilangkan underline dari NuxtLink */
	margin-top: auto; /* Mendorong tombol ke bawah */
	align-self: center; /* Memusatkan tombol secara horizontal */
	transition: background-color 0.2s ease, transform 0.2s ease;
}
.card-button:hover {
	background-color: #2980b9;
	transform: scale(1.03);
}
</style>
