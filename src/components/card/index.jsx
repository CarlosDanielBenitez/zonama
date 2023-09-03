import React from 'react'
import './styles.css'

export const Card = ({ nombreArticulo,
    description,
    description2,
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
                <p className='cardDescription'>{description2}</p>
                <p className='cardCategory'>{category}</p>
                <p className='cardPrice'>US$ {price}</p>
                <p className='cardStock'>Stock: ${stock}</p>
                <div className="cardActions">
                    <button type="button" className='counterButton' onClick={()=> onAddToCart(id)}>+</button>
                </div>
            </div>
        </div>
 
    )
}
