import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Empresa from './pages/Empresa'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Exercicios from './pages/Exercicios'


function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} > </Route>
        <Route path='/empresa'element={<Empresa />}> </Route>
        <Route path='/contato'element={<Contato />}> </Route>
        <Route path='/exercicios'element={<Exercicios />}> </Route>
      </Routes>
      
      <Footer/>

    </Router>
  );
}

export default App;
