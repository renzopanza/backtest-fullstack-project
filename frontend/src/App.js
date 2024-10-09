import React, { useState } from 'react';
import MenuPrincipal from './components/MenuPrincipal/MenuPrincipal';
import Grafico from './Grafico/Grafico';
import './App.css'

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/data');  // Requisição para o endpoint em Node.js
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <div className="App">
      <MenuPrincipal/>
      <div className='Botao'>
        <button onClick={fetchData} className='Botao_buscar'>Buscar Dados</button>
      </div>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <Grafico/>
    </div>
  );
}

export default App;
