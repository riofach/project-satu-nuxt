// Kita import 'ref' dari vue untuk membuat data kita reaktif.
import { ref } from 'vue';

// Kita definisikan data produk di sini, HANYA SATU KALI.
const productsData = [
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
		isNew: true,
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

// Inilah fungsi composable kita.
// Nama fungsi composable disarankan diawali dengan kata 'use'.
export const useProducts = () => {
	// Kita bungkus data kita dengan 'ref' agar menjadi reaktif.
	const products = ref(productsData);

	// Fungsi untuk mendapatkan semua produk
	const getAllProducts = () => {
		return products;
	};

	// Fungsi untuk mendapatkan satu produk berdasarkan ID
	const getProductById = (id: number) => {
		return products.value.find((p) => p.id === id);
	};

	const getNewProducts = () => {
		return products.value.filter((p) => p.isNew);
	};

	// Kita 'return' semua data dan fungsi yang ingin kita sediakan
	// agar bisa digunakan di tempat lain.
	return {
		products, // bisa juga langsung return getAllProducts()
		getAllProducts,
		getProductById,
		getNewProducts,
	};
};
