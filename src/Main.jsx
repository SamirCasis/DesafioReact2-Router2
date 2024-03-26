import React from 'react'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import PokemonsProvider from './context/DataContext.jsx'
import PokeDetallesContext from './context/DetallesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonsProvider>
        <PokeDetallesContext>
        <App />
        </PokeDetallesContext>
      </PokemonsProvider>
    </BrowserRouter>
  </React.StrictMode>
)
