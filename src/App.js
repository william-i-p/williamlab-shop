import './App.css';
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
          </div>
        </div>
    </div>
   
  );
  
}

export default App;
