import React, { useState } from 'react';

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
      <h1>Frontend React com Node.js e Backend Python</h1>
      <button onClick={fetchData}>Buscar Dados</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;
