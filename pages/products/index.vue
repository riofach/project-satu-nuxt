<script setup lang="ts">
// Panggil composable kita.
import { useProducts } from '@/composables/useProducts';

// Kita "destructure" untuk mengambil 'products' dari objek yang di-return.
const { products } = useProducts();
</script>

<template>
	<div>
		<h2>Katalog Produk Kami</h2>
		<p>Temukan produk-produk buah terbaik pilihan kami.</p>

		<NuxtLink to="/products/whats-new" class="new-products-link">Lihat Produk Baru</NuxtLink>
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

.new-products-link {
	display: block;
	margin-bottom: 1rem;
}
</style>
