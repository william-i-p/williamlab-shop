import './App.css';
//import Formulario from './components/Formulario';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import  Products  from './products/Products';

const App = (props) => {

  const Products = props.numbers;

  return (

    <div className="App">
        <NavBar />
        <div className='container'>
          <h1>BIENVENIDO A MI TIENDA</h1>
         {
            Products.map( (num) => (
            <ItemListContainer key={num.id} {...num}
             />
          ))}
        </div>
    </div>
   
  );
  
}

export default App;
