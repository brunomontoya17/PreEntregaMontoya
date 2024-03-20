
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetail from './components/ItemDetail'

function App() {

  return (
    <>
      
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' 
            element={
            <ItemListContainer greeting="Bienvenidos a Action Hardware!"/>
            }/>
            <Route exact path='/category/:id' 
            element={<ItemListContainer />}/>
            <Route exact path='/item/:id' 
            element={<ItemDetail />}/>
          </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
