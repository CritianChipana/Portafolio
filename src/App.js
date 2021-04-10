import './App.css';
import Article from './Components/Article/Article';
import Boton from './Components/Boton/Boton';
import Clientes from './Components/Clientes/Clientes';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Foot/Footer';
import Home from './Components/Home/Home';
import Interes from './Components/Interes/Interes';
import Main from './Components/Main/Main';
import Nav from './Components/Nav/Nav';
import Section from './Components/Section/Section';
// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Main/>
      <Boton/>
      <Section/>
      <Article/>
      <Clientes/>
      <Interes/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
