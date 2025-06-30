<script lang="ts" setup>
import { useProducts } from '@/composables/useProducts';

const { getNewProducts } = useProducts();

const newProducts = computed(() => getNewProducts());
</script>

<template>
	<div>
		<h2>Produk Baru</h2>
		<div class="product-grid">
			<ProductCard v-for="product in newProducts" :key="product.id" :product="product" />
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
