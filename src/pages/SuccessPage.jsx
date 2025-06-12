// File: src/pages/SuccessPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function SuccessPage() {
  return (
    <div className="container mx-auto py-12 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Pesanan Berhasil!</h1>
      <p className="mb-6">Terima kasih telah berbelanja di Tokoku. Pesanan Anda sedang diproses.</p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default SuccessPage;

