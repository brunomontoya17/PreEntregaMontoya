
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetail from './components/ItemDetail'
import { CartProvider, CartContext } from './contexts/CartContainer'
import CheckOut from './components/CheckOut'
import FinishedBuys from './components/FinishedBuys'

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/'
              element={
                <ItemListContainer greeting="Bienvenidos a Action Hardware!" />
              } />
            <Route exact path='/category/:id'
              element={<ItemListContainer />} />
            <Route exact path='/item/:id'
              element={<ItemDetail />} />
            <Route exact path='/checkout'
              element={<CheckOut />}/>
            <Route exact path='/purchases'
              element={<FinishedBuys />}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>


    </>
  )
}

export default App
