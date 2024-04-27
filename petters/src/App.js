

/*import { Navbar } from './components/Navbar';*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from'./startpage/AppSP';
import NavbarSP from './startpage/componentsSP/NavbarSP';
import { ShopContextProvider } from './pages/context/shop-context';
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';
import {ShopD} from './pages/shop/ShopD';
import {ShopC} from './pages/shop/ShopC';
import AboutUs from './startpage/componentsSP/AboutUs';

function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <NavbarSP />
          <Routes>
            <Route path="/"  element={ <Home />}/>
            <Route path="/shop" element={ <Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/adoptdog" element={<ShopD/>}/>
            <Route path="/adoptcat" element={<ShopC/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
          </Routes>
        </Router>
        </ShopContextProvider>
    </div>
  );
}

export default App;
