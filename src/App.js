import './App.css';
import {lazy, Suspense } from 'react'
import { ItemContainer } from './components/ItemContainer';
//import Formulario from './components/Formulario';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
//import PDescription from './components/PDescription';

const PDescription = lazy(() => import('./components/PDescription'))

const App = () => {

  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then( (res) => res.json())
  // .then( (json) => console.log(json))
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className='container'>
          <h1>BIENVENIDO A MI TIENDA</h1>
          <Routes>
            <Route index path='/' element={<ItemContainer />} />
            <Route index path='/categoria/:categoriaId' element={<ItemContainer />} />
            <Route path='/description/:productId' element={<Suspense fallback={<div>Cargando</div>}><PDescription /></Suspense>} />
            <Route path='*' element={<Navigate to='/' />} />    
          </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
