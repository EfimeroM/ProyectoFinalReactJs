import React, { useContext } from 'react'
import { Link, NavLink} from 'react-router-dom'
import { ImXing2 } from "react-icons/im"
import {Navbar, Nav, NavDropdown,Container} from 'react-bootstrap'
import './NavBar.scss'
import { CartWidget } from './CartWidget'

export const NavBar = () => {

    return (
		<header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="link">
              <ImXing2 className="icono"/>
              TopTier Juegos
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categorias" id="collasible-nav-dropdown" >
                <div className="sub-menu">
                  <NavLink activeClassName={'activeLink'} className="sub-nav-link" exact to="/category/accion">Accion</NavLink>
                  <NavLink activeClassName={'activeLink'} className="sub-nav-link" exact to="/category/simulacion">Simulacion</NavLink>
                  <NavLink activeClassName={'activeLink'} className="sub-nav-link" exact to="/category/moba">Moba</NavLink>
                </div>
              </NavDropdown>
              <Nav.Link><Link className="link" to="/releases">Proximos Lanzamientos</Link></Nav.Link>
              <Nav.Link><Link className="link" to="/about-us">Acerca De</Link></Nav.Link>
            </Nav>
            <Nav>
              <NavLink activeClassName={'activeLink'} className="cart link" exact to="/cart">
                <CartWidget />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
		</header>
  )
}

export default NavBar
