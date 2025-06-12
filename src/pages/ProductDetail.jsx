// File: src/pages/ProductDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const productData = {
  1: {
    name: 'Kaos Polos Hitam',
    price: 45000,
    description: 'Kaos polos warna hitam dengan bahan katun premium.',
    image: '/assets/img/kaos-hitam.jpg',
  },
  2: {
    name: 'Kaos Polos Putih',
    price: 45000,
    description: 'Kaos polos warna putih, cocok untuk aktivitas santai.',
    image: '/assets/img/kaos-putih.jpg',
  },
};

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = productData[id];

  if (!product) return <p>Produk tidak ditemukan.</p>;

  const handleAddToCart = () => {
    addToCart({
      id: Number(id),
      name: product.name,
      price: product.price,
      image: product.image,
    });
    navigate('/cart');
  };

  return (
    <div className="container mx-auto py-6">
      <div className="grid md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.name} className="w-full h-auto rounded shadow" />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-blue-600 mb-4">Rp {product.price.toLocaleString()}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Tambahkan ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
