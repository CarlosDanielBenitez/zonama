import React, { useState } from 'react';
import './styles.css';

export const Card = ({
  nombreArticulo,
  description,
  description2,
  category,
  price,
  img1,
  img2,
  img3,
  id,
  onAddToCart,
  stock,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [img1, img2, img3];

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div key={id} className='card'>
      <div className='imgContent'>
        <img src={images[currentImageIndex]} alt={nombreArticulo} />
      </div>
      <div className="cardActions">
        
      <button type='button' className='counterButton' onClick={handlePrevImage}>
      🡰
          </button>
          <button type='button' className='counterButton' onClick={handleNextImage}>
          🡲
          </button>
      </div>
      <div className='cardContent'>
        <h2 className='cardName'>{nombreArticulo}</h2>
        <p className='cardDescription'>{description}</p>
        <p className='cardDescription'>{description2}</p>
        <p className='cardCategory'>{category}</p>
        <p className='cardPrice'>💵US$ {price}</p>
        <p className='cardStock'>Stock: {stock}</p>
        <div className='cardActions'>
          <button type='button' className='counterButton' >
          -
          </button>
          <button type='button' className='counterButton' onClick={() => onAddToCart(id)}>
          ✜
          </button>
        </div>
      </div>
    </div>
  );
};
