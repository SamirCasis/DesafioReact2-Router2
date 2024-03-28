import { Route, Routes } from 'react-router-dom'
import { Home, PokeView, NotFound, PokeFile } from './views/Index'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Pokemons' element={<PokeView />} />
        <Route path='/Pokemons/:name' element={<PokeFile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
