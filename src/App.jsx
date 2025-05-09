
import './App.css'
import Contacto from './components/Contacto/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes, UNSAFE_RouteContext } from 'react-router-dom';
import {ContextProvider } from './context/Context';
import Carrito from './components/Carrito/Carrito';
import Checkout from './components/Checkout/Checkout';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
        <ContextProvider>
          <ToastContainer/>
          <BrowserRouter>
          
            <Navbar/>

            <Routes>
              <Route path="/" element={<ItemListContainer />}/>
              <Route path="/Item/:id" element={<ItemDetailContainer />}/>
              <Route path="/productos" element={<ItemListContainer/>}/>
              <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
              <Route path="/contacto" element={<Contacto/>}/>
              <Route path="/Carrito" element={<Carrito/>}/>
              <Route path="/Checkout" element={<Checkout/>}/>
            </Routes>

    
          </BrowserRouter>
        </ContextProvider>
    </div>
  )
};

export default App
