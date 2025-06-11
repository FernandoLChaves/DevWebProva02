import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import Contatos from './pages/contatos';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <h1 id = "marca">ConnectBook</h1>
          <ul id = "navBar">
            <li id = "home"><Link to="/">Home</Link></li>
            <li id ="home"><Link to="/contatos">Contatos</Link></li>
          </ul>
          
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contatos" element={<Contatos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
