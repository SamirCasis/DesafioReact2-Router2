import Navigation from './components/Navigation'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import PokeView from './views/PokeView'
import NotFound from './views/NotFound'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<PokeView />} />
        <Route path='/pokemons/:name' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App