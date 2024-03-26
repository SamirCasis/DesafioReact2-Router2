import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

const setActiveClass = ({ isActive }) => (isActive ? 'active' : undefined)

const Navigation = () => {
  return (
    <Navbar bg='dark' data-bs-theme='dark'>
      <Container>
        <NavLink className='bHomeImg' to='/'> <img className='imgHome' src='https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png' alt='' /> </NavLink>
        <Nav className='navButtons ms-auto m-3'>
          <NavLink to='/' className={setActiveClass}> Inicio </NavLink>
          <NavLink to='/PokeSelect' className={setActiveClass}> Pokemons </NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
