import './App.css'
import MyButton from './components/MyButton'
import ContadorClase from './components/counter_components/ContadorClase'
import ContadorFunc from './components/counter_components/ContadorFunc'
import ComponentA from './components/components_composition/ComponentA'

function App() {

  return (
    <>
    {/* <ContadorClase/> */}
    {/* <ContadorFunc/> */}
    <ComponentA emoji= "😻"  titulo="Componente A con emoji" />
    </>
  )
}

export default App
