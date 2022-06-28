import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
const App = () => {


  return (
    <div className="App">
        <NavBar/>
        <div className='container'>
          <h1>BIENVENIDO A MI TIENDA</h1>
        </div>
    </div>
  );
}

export default App;
