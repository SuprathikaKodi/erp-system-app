import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import Products from './components/Pages/Products/Products';
import Orders from './components/Pages/Orders/Orders'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
    <div className="App">
      <div className="AppGlass"> 
         <div className="sidebarContainer" >
           <Sidebar/>   
          </div>
          <div className="contentContainer">
          
             <Routes>
              <Route index element={<DashBoard/>}/>
              <Route path="/DashBoard" element={<DashBoard/>}/>
              <Route path="/Products" element={<Products/>}/>
              <Route path="/Orders" element={<Orders/>}/>
             </Routes>
             
          <nav className="Buttons">
          <Link to="/DashBoard"><button className="navButton">DashBoard</button></Link>
              <Link to="/Products"><button className="navButton">Products</button></Link>
              <Link to="/Orders"><button  className="navButton">Orders</button></Link>
          </nav>
          </div>
       </div>
   </div>
   </Router>
   </>
  );
}

export default App;
