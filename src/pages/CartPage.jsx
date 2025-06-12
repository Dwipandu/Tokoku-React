// File: src/pages/CartPage.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

function CartPage() {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-6">
      <motion.h1
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Keranjang Belanja
      </motion.h1>
      {cart.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Keranjang kosong. <Link to="/">Belanja sekarang</Link>.
        </motion.p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <motion.div
              key={item.id}
              className="flex items-center gap-4 border-b pb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: item.id * 0.1 }}
            >
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1">
                <h2 className="font-semibold">{item.name}</h2>
                <p>Jumlah: {item.quantity}</p>
                <p>Harga: Rp {item.price.toLocaleString()}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Hapus
              </button>
            </motion.div>
          ))}

          <motion.div
            className="text-right mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg font-bold">Total: Rp {total.toLocaleString()}</p>
            <button
              onClick={() => navigate('/checkout')}
              className="mt-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Checkout
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
