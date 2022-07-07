import './App.css';
import { ItemContainer } from './components/ItemContainer';
//import Formulario from './components/Formulario';

import { NavBar } from './components/NavBar';


const App = () => {

  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then( (res) => res.json())
  // .then( (json) => console.log(json))
  

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
