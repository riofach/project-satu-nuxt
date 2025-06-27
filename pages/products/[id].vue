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
			<ProductCard v-for="p in otherProducts" :key="p.id" :product="p" />
		</div>
	</div>
</template>

<script lang="ts" setup>
// 'useRoute' adalah composable dari Nuxt untuk mendapatkan informasi tentang rute saat ini.
const route = useRoute();

// Kita ambil parameter 'id' dari URL. route.params.id
const productId = route.params.id;

// -- Untuk sementara, kita duplikat data produk di sini --
// Nanti kita akan belajar cara yang lebih baik agar data tidak duplikat.
const products = [
	{
		id: 1,
		name: 'Semangka',
		price: 30000,
		imageUrl: '/images/semangka.png',
		description: 'Semangka merah yang manis dan menyegarkan, cocok untuk cuaca panas.',
		isNew: true,
	},
	{
		id: 2,
		name: 'Durian',
		price: 40000,
		imageUrl: '/images/durian.png',
		description: 'Raja dari segala buah dengan aroma khas dan rasa yang legit.',
		isNew: false,
	},
	{
		id: 3,
		name: 'Mangga',
		price: 40000,
		imageUrl: '/images/mangga.png',
		description: 'Mangga harum manis matang pohon, dijamin tanpa bahan kimia.',
		isNew: false,
	},
	{
		id: 4,
		name: 'Apel',
		price: 40000,
		imageUrl: '/images/apel.png',
		description: 'Apel fuji renyah dengan rasa manis sedikit asam, kaya akan vitamin.',
		isNew: false,
	},
	{
		id: 5,
		name: 'Nanas',
		price: 25000,
		imageUrl: '/images/nanas.png',
		description: 'Nanas madu asli dari Subang, manis dan tidak gatal di lidah.',
		isNew: false,
	},
];

// Kita cari produk di dalam array berdasarkan productId yang kita dapat dari URL
// Karena productId dari URL adalah string, kita perlu mengubahnya ke angka (integer)
const product = products.find((p) => p.id === parseInt(productId as string));

// Filter, acak, dan ambil 3 produk lain untuk ditampilkan.
const otherProducts = computed(() => {
	// Langkah 1: Saring produk untuk membuang produk yang sedang aktif.
	return (
		products
			.filter((p) => p.id !== parseInt(productId as string))
			// Langkah 2: Acak urutan array yang sudah disaring.
			.sort(() => Math.random() - 0.5)
			// Langkah 3: Ambil 3 elemen pertama dari array yang sudah diacak.
			.slice(0, 3)
	);
});
</script>

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
