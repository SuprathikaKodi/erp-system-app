import React from 'react';
import './DashBoard.css'
import Cards from '../Cards/Cards';
const DashBoard = () => {
  return (
    <>
    <h1>DashBoard</h1>
    <div className="DashBoard">
        
        <h3>Welcome to the Dashboard of our ERP system</h3>
        <h5>Here, you'll find a concise summary of key metrics and features essential for managing your business operations efficiently. Get instant insights into crucial aspects such as total number of products, orders, and more, all in one centralized location.</h5>
       <Cards/>
     
    </div>
    </>
  );
}

export default DashBoard;
