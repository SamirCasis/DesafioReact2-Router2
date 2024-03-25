import { Route, Routes } from 'react-router-dom'
import { Home, PokeView, NotFound } from './views/Index'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<PokeView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
