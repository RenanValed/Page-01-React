import './App.css'

import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'
import Condicional from './components/Condicional'
import OutraLista from './components/OutraLista'


function App() {

  const foto1= "https://luiscardoso.com.br/wp-content/uploads/2020/06/160F46FA-F58E-4967-A86D-18C99E9C3D89.jpeg"
  const name = "Manoel Gomes"

  const meusItens = ['React', 'Vue', 'Angular']
  const itensVazio = []

    function upper(nome){
    return nome.toUpperCase()
    }

  return (
    <div className="App">
  
      <h1>Olá React</h1>
      <p>Olá meus amigues, eu sou {upper(name)}</p>
      <img className="foto1" src={foto1} alt="Minha imagem"/>
      <SayMyName nome="Matheus"/>
      

      <Frase/>

      <Pessoa 
        nome="Inacio"
        idade="22" 
        profissao="Designer" 
        foto="https://via.placeholder.com/150"
      />
      <List/>
      
    <h1>Testando Evento   </h1>
    <Evento/>

    <Form />

    <h1>Renderização condicional (if)  </h1>
    <Condicional />

    <h1>Renderização de listas  </h1>
    <OutraLista itens={meusItens}/>
    <OutraLista itens={itensVazio}/>
    
    </div>

    
  );
}

export default App;
