import './App.css';

import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() { 
  const nome = "Maria"

  return (

    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome="Thailon"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Thailon" idade="26" profissao="T.I" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
