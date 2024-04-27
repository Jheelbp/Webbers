

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
import Map from './map/Map';
import Blog from './Blogs/Blog';
import Blog2 from './Blogs/Blog2';
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
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="/map" element={<Map/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog2" element={<Blog2/>}/>
          </Routes>
        </Router>
        </ShopContextProvider>
    </div>
  );
}

export default App;
