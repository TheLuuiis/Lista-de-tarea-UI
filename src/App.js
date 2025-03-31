import './App.css';
import React, {useState} from 'react';
import  Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';

const App = () => {

  const [tareas, cambiarTareas] = useState(
    [
      {
        Id: 1,
        texto: 'Lavar la ropa',
        completada: true
      },
      {
        Id: 2,
        texto: 'Jugar',
        completada: false
      }
    ]
  );

  console.log(tareas);

  return (
    <div className="contenedor">
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
    </div>
  );
}

export default App;
