import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Provider from './components/CartContext';

function App() {
  // const pageInfo = {logo:"logo1.png", title:"Welcome to devbooks.", description:"books for programmers and developers."};
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/books/:cat' element={<ItemListContainer />} />
            <Route exact path='/book/:ids' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
