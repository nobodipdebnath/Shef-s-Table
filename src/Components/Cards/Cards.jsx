import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card';

export const Cards = ({addRecipe}) => {
    const [cards, setCards] = useState([]);
    useEffect(() =>{
        fetch('cards.json')
        .then(res => res.json())
        .then(data => setCards(data));
    }, [])
  return (
    <div className='md:w-2/3 grid md:grid-cols-2 gap-6 '>
        {
            cards.map(card => <Card key={card.recipe_id} card={card} addRecipe={addRecipe}></Card>)
        }
    </div>
  )
}
