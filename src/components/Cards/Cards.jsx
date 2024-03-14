import React from 'react';
import './Cards.css'
import { CardsData } from '../../Data/Data';
import Card from '../Card/Card';
const Cards = () => {
  return (
    <div className="Cards">
      {CardsData.map((card,id) =>{
        return(
            <div key={id}
            className="parentContainer">
                <Card
                title={card.title}
                color={card.color}
                value={card.value}
                />
            </div>        
            )
      })}
    </div>
  );
}

export default Cards;
