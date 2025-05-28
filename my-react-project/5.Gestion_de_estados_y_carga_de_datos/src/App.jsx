
import './App.css'
import ListaCarrito from './components/ListaCarrito'
import ListaProductos from './components/ListaProductos'
import { DataProvider } from './components/DataContext'
function App() {

  
  return (
    <>
      <DataProvider>
        <ListaCarrito />
        <ListaProductos />
      </DataProvider>
    </>
  )
}

export default App