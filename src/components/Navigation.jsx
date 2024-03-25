import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

const setActiveClass = ({isActive}) => (isActive? 'active' : undefined)

const Navigation = () => {
  return (
    <Navbar bg='dark' data-bs-theme='dark'>
    <Container>
      <Link className='bHomeImg' to='/'> <img className='imgHome' src='https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png' alt=''/> </Link>
      <Nav className='navButtons ms-auto m-3'>
        <NavLink className={setActiveClass} to='/'> Inicio </NavLink>
        <NavLink className={setActiveClass} to='/PokeView'> Pokemons </NavLink>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navigation