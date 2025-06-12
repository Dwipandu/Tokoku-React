// File: src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Kaos Polos Hitam',
    price: 45000,
    image: '/assets/img/kaos-hitam.jpg',
  },
  {
    id: 2,
    name: 'Kaos Polos Putih',
    price: 45000,
    image: '/assets/img/kaos-putih.jpg',
  },
];

function Home() {
  return (
    <div className="container mx-auto py-6">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Daftar Produk
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-blue-600 mb-4">Rp {product.price.toLocaleString()}</p>
            <Link
              to={`/product/${product.id}`}
              className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Lihat Detail
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Home;
