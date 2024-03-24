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
        <Route path='/' element={<Home />} />
        <Route path='/pokemons/:name' element={<PokeView />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App