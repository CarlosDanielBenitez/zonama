// ProductList.js
import React, { useState, useEffect } from 'react';
import products from '../../products/main';
import './styles.css';
import { Card } from '../../components/card';





const Articles = () => {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);
  //*Counter


  useEffect(() => {
    try {
      // Simulación de una solicitud fetch utilizando los datos locales importados
      // En un entorno real, reemplaza esto con una solicitud real a tu API
      setProductList(products);
    } catch (err) {
      setError('No se pudieron cargar los productos');
    }
  }, []);

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productList.map(product => (
          <Card key={product.id} {...product}/>
        ))}
      </ul>
    </div>


  );
};

export default Articles;
