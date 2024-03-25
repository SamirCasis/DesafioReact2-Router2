// En el componente App.jsx
import React from 'react'
import Navigation from './components/Navigation'
import { Route, Routes } from 'react-router-dom'
import { Home,NotFound, PokeView } from './views/Index'
import PokeSelect from './components/PokeSelect'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemons/:name' element={<PokeView />} />
        <Route path='/select' element={<PokeSelect />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
