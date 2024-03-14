import React, { useState } from 'react';
import './Sidebar.css'
import logo from '../../imgs/logo.png'
import { SidebarData } from '../../Data/Data';

const Sidebar = () => {
    
    const[selected, setSelected] =useState(0)

  return (
    <div className="Sidebar">
        {/* logo*/} 
        <div className="logo">
            <img src={logo} alt="logo"/>
            <span>LogisticSystem</span>
        </div>
        {/*menu*/}
        
        <div className="menu">
            
            {SidebarData.map((item,index)=>{
                return(
                    <div className={selected===index?'menuItem active':'menuItem'}
                    key={index}
                    onClick={()=>setSelected(index)}
                    >
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })
        }
        </div>
    </div>
  ); 
}

export default Sidebar;
