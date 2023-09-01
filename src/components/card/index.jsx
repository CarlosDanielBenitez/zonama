import React from 'react'
import { Counter } from '../counter'

export const Card = ({ nombreArticulo,
    description,
    category,
    price,
    img,
    id,
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
                    <Counter />
                </div>
            </div>
        </div>
    )
}
