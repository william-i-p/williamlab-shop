import './App.css';
import { AddToCart } from './components/AddToCart';
import { ItemContainer } from './components/ItemContainer';
//import Formulario from './components/Formulario';

import { NavBar } from './components/NavBar';


const App = () => {

  return (
    <div className="App">
        <NavBar />
        <div className='container'>
          <h1>BIENVENIDO A MI TIENDA</h1>
          <div>
            <ItemContainer />
            <AddToCart />
          </div>
        </div>
    </div>
   
  );
  
}

export default App;
