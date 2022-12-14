import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Provider from './components/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/books/:cat' element={<ItemListContainer />} />
            <Route exact path='/book/:ids' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />}/>
            <Route exact path='/Checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
