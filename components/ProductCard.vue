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
		<img :src="product.imageUrl" :alt="product.name" class="card-img" />
		<div class="card-body">
			<h3 class="card-title">{{ product.name }}</h3>
			<p class="card-price">Rp {{ product.price.toLocaleString('id-ID') }}</p>
			<p v-if="product.isNew">Fresh</p>
			<button class="card-button">Lihat Detail</button>
		</div>
	</div>
</template>

<style scoped>
/* 'scoped' artinya style ini HANYA berlaku untuk komponen ProductCard.vue 
   dan tidak akan bocor ke komponen lain. Ini sangat penting! */
.card {
	border: 1px solid #ddd;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s;
}
.card:hover {
	transform: translateY(-5px);
}
.card-img {
	width: 100%;
	height: 200px;
	object-fit: cover; /* Agar gambar tidak gepeng */
}
.card-body {
	padding: 1rem;
}
.card-title {
	margin-top: 0;
	margin-bottom: 0.5rem;
	font-size: 1.25rem;
}
.card-price {
	color: #e67e22;
	font-weight: bold;
	margin-bottom: 1rem;
}
.card-button {
	display: block;
	width: 100%;
	padding: 0.75rem;
	background-color: #3498db;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	text-align: center;
}
.card-button:hover {
	background-color: #2980b9;
}
</style>
