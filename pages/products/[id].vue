<script setup lang="ts">
import { useProducts } from '@/composables/useProducts';

// Panggil composable kita untuk mendapatkan fungsi pencarian
const { getProductById } = useProducts();
const route = useRoute();

const productId = computed(() => parseInt(route.params.id as string));

// Gunakan fungsi dari composable untuk mencari produk. Jauh lebih bersih!
const product = computed(() => getProductById(productId.value));

// Logika untuk rekomendasi produk juga menjadi lebih bersih
const { products } = useProducts(); // panggil lagi untuk mendapatkan semua produk
const recommendedProducts = computed(() => {
	if (!product.value) return []; // pastikan produk utama ada
	const otherProducts = products.value.filter((p: { id: any }) => p.id !== product.value.id);
	const shuffled = [...otherProducts].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, 3);
});
</script>

<template>
	<div>
		<div v-if="product" class="product-detail-container">
			<img :src="product.imageUrl" :alt="product.name" class="product-detail-img" />
			<div class="product-detail-info">
				<h1>{{ product.name }}</h1>
				<p class="price">Rp {{ product.price.toLocaleString('id-ID') }}</p>
				<p class="description">{{ product.description }}</p>
				<p v-if="product.isNew" class="description">Fresh Fruity</p>
				<button class="add-to-cart-button">Tambah ke Keranjang</button>
			</div>
		</div>
		<div v-else>
			<h1>404 - Produk Tidak Ditemukan</h1>
			<p>Maaf, produk yang Anda cari tidak ada.</p>
			<NuxtLink to="/products">Kembali ke Katalog</NuxtLink>
		</div>
	</div>

	<div v-if="product" class="other-products-section">
		<h2>Produk Lainnya</h2>
		<div class="product-grid">
			<ProductCard v-for="p in recommendedProducts" :key="p.id" :product="p" />
		</div>
	</div>
</template>

<style scoped>
.product-detail-container {
	display: flex;
	gap: 2rem;
	margin-top: 2rem;
}
.product-detail-img {
	width: 50%;
	max-width: 400px;
	height: auto;
	border-radius: 8px;
}
.product-detail-info {
	flex: 1;
}
.price {
	font-size: 2rem;
	font-weight: bold;
	color: #e67e22;
	margin: 1rem 0;
}
.description {
	font-size: 1.1rem;
	line-height: 1.6;
}
.add-to-cart-button {
	margin-top: 2rem;
	padding: 1rem 2rem;
	font-size: 1.2rem;
	background-color: #27ae60;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}
.product-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 2rem;
	margin-top: 2rem;
}
.other-products-section {
	margin-top: 4rem;
	padding-top: 2rem;
	border-top: 1px solid #eee;
}
</style>
