import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useHistory} from 'react-router-dom'
import { ImXing2 } from "react-icons/im"
import {Navbar, Nav, NavDropdown,Container} from 'react-bootstrap'
import './NavBar.scss'
import { CartWidget } from './CartWidget'
import { UserAuthContext } from '../../context/UserAuthContext'
import { useLocation } from 'react-router-dom'
import { Navhistory } from '../NavHistory/Navhistory'
import { rightCardAlert } from '../SweetAlert/Alert'
export const NavBar = () => {

  const {push} = useHistory()
  const {isAuthenticated, setIsAuthenticated} = useContext(UserAuthContext)
  const [navbar, setNavbar] = useState(true)
  let location = useLocation();

  useEffect(() => {
    if(String(location.pathname) === "/login"){
        setNavbar(false)
    }else{
        setNavbar(true)
    }
  }, [location])
  
  const signOff = () =>{
    rightCardAlert("Sesion cerrada con exito")
    push("/")
    setIsAuthenticated(false)
  }

    return (
      <>
      {
        navbar === true ?
        <>
        <header>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand>
              <Link to="/" className="link">
                <ImXing2 className="icono"/>
                ShopCard
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Categorias" id="collasible-nav-dropdown" >
                  <div className="sub-menu">
                    <NavLink activeClassName={'activeLink'} className="sub-nav-link" exact to="/category/remeras">Remeras</NavLink>
                    <NavLink activeClassName={'activeLink'} className="sub-nav-link" exact to="/category/abrigos">Abrigos</NavLink>
                    <NavLink activeClassName={'activeLink'} className="sub-nav-link" exact to="/category/camisas">Camisas</NavLink>
                  </div>
                </NavDropdown>
                <Link className="link py-2 px-2" to="/about-us">Acerca De</Link>
                <>
                {
                  isAuthenticated?
                    <NavDropdown title="Mi perfil" id="collasible-nav-dropdown" >
                      <div className="sub-menu">
                        <div style={{border: "none"}} activeClassName={'activeLink'} className="sub-nav-link" exact to="/category/abrigos" onClick={signOff}>Cerrar Sesion</div>
                      </div>
                    </NavDropdown>
                  :
                  <Link className="link py-2 px-2" to="/login">Iniciar Sesion/Registrarse</Link>
                }
                </>
              </Nav>
              <Nav>
                <NavLink activeClassName={'activeLink'} className="cart link" exact to="/cart">
                  <>
                  {
                    isAuthenticated?
                    <CartWidget />      
                    :
                    <></>
                  }
                  </>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
          </Navbar>  
		    </header>
        <Navhistory />
        </>
        :
        <></>
      }
      </>
  )
}

export default NavBar
