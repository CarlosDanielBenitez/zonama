// ProductList.js
import React, { useState, useEffect } from 'react';
import products from '../../products/main';
// Ajusta la ruta según tu estructura de carpetas

const Articles = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // Simulación de una solicitud fetch utilizando los datos locales
    // En un entorno real, reemplaza esto con una solicitud real a tu API
    setProductList(products);
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productList.map(product => (
          <li key={product.id}>
            <h2>{product.nombreArticulo}</h2>
            <img src={product.img} alt={product.nombreArticulo} />
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
