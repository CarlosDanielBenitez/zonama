import React from 'react'
import './styles.css'

export const Card = ({ nombreArticulo,
    description,
    category,
    price,
    img,
    id,
    onAddToCart,
    stock }) => {
    return (
    
            <div key={id} className='card'>
            <img src={img} alt={nombreArticulo} />
            <div className='cardContent'>
                <h2 className='cardName'>{nombreArticulo}</h2>
                <p className='cardDescription'>{description}</p>
                <p className='cardCategory'>{category}</p>
                <p className='cardPrice'>Precio: ${price}</p>
                <p className='cardStock'>Stock: ${stock}</p>
                <div className="cardActions">
                    <button type="button" className='counterButton' onClick={()=> onAddToCart(id)}>+</button>
                </div>
            </div>
        </div>
 
    )
}
