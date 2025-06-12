import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Tokoku</h1>
      <p>Selamat datang di Tokoku React!</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <h2>Produk 1</h2>
          <p>Rp 10.000</p>
          <button>Beli</button>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <h2>Produk 2</h2>
          <p>Rp 15.000</p>
          <button>Beli</button>
        </div>
      </div>
    </div>
  );
}

export default App;
