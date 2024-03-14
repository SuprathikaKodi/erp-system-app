import React from 'react';
//import { CardsData } from '../../Data/Data';
import './Card.css'

const Card = ({ title, color, value }) => {
  return (
    <div className="card" style={{ background: color.backGround, boxShadow: color.boxShadow }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default Card;
