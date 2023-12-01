import { useEffect, useState } from 'react';
import { BrowserRouter as Router , json, Route , Routes} from 'react-router-dom'
import Adminaddproducts from './Adminaddproducts';
import Adminproducts from './Adminproducts';
import Adminproductupdate from './Adminproductupdate';
import Cart from './Cart';
import { Contextapi } from './Contextapi';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import Myorders from './Myorders';
import Products from './Products';
import Reg from './Reg';
function App() {
  const [loginname,setloginname]=useState(localStorage.getItem('loginname'))
  const [cart,setCart]=useState(JSON.parse(localStorage.getItem('cart')))
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])
  return ( 
    <Router>
      <Contextapi.Provider value={{loginname,setloginname,cart,setCart}}>
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/reg' element={<Reg/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/adminproducts' element={<Adminproducts/>}></Route>
        <Route path='/adminaddproducts' element={<Adminaddproducts/>}></Route>
        <Route path='/productupdate/:id' element={<Adminproductupdate/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/myorders' element={<Myorders/>}></Route>
      </Routes>
      <Footer/>
      </Contextapi.Provider>
    </Router>
   );
}

export default App;