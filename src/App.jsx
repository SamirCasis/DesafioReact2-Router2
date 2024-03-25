import Navigation from './components/Navigation'
import { Route, Routes } from 'react-router-dom'
import { Home, PokeView, NotFound } from './views/Index'

const App = () => {
  return (
    <>
    <Navigation />
      <Routes>
        <Route path='/' element={<PokeView/>} />
        <Route path='/pokemon/:name' element={<PokeView/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
