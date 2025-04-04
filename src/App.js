import './App.css';
import React, {useState} from 'react';
import  Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTareas';

const App = () => {

  const [tareas, cambiarTareas] = useState(
    [
      {
        id: 1,
        texto: 'Lavar la ropa',
        completada: true
      },
      {
        id: 2,
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
      <ListaTareas tareas={tareas} />
    </div>
  );
}

export default App;
