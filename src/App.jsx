//import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {
  const siteName = 'Soulmate';
  return (
   <>
      <h1>{siteName}</h1>
      <NavBar/>
      <ItemListContainer />
   </>
  )
}

export default App
