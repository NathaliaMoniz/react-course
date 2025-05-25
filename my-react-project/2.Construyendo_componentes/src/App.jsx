import './App.css'
import MyButton from './components/MyButton'
import ContadorClase from './components/counter_components/ContadorClase'
import ContadorFunc from './components/counter_components/ContadorFunc'
import ComponentA from './components/components_composition/ComponentA'
import ComponentB from './components/components_composition/ComponentB'
import { useCallback, useState } from 'react';
function App() {

  const Myemoji = "🛬";
  const texto_boton = "Buscar destino";
  const handleClick = () => {
    setMessage("¡Destino encontrado! 🗺️");
  }
  const [message, setMessage] = useState("Viajes y aventuras");
  const callback = useCallback((datos) => {
    setMessage(datos);
  }, [message]);

  return (
    <>
    {/* <ContadorClase/> */}
    {/* <ContadorFunc/> */}
    <div className='box'>
      <ComponentA emoji= {Myemoji}   titulo={message} /> // se envia informacion del padre al hijo
      <ComponentB texto_boton={texto_boton} handleClick={handleClick}/> // componente controlado por el padre
      <ComponentB texto_boton={"Callback"} handleClick={callback}/>
    </div>
    
    </>
  )
}

export default App
