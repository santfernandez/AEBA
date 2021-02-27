import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown, Button, Image } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link'
import { logout } from '../actions/userActions'
import Logo from '../images/isologo-aeba-negro-1.png'
import Instagram from '../images/logotipo-de-instagram.png'
import Facebook from '../images/facebook.png'

const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand><Image src={Logo} fluid/></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <HashLink  to='/#noticias'>
                            <Nav.Link className="pl-3 noticias-btn" >Noticias</Nav.Link>
                        </HashLink>
                        <HashLink to='/#contacto'>
                            <Nav.Link className="pl-3 pr-4 noticias-btn" >Contacto</Nav.Link>
                        </HashLink>
                        <LinkContainer to='/instagram'>
                            <Nav.Link className='d-none d-lg-block'><Image src={Instagram} xl={1} className="ig-icon" /></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/facebook' >
                        <Nav.Link className='d-none d-lg-block pr-3'><Image src={Facebook} className="fb-icon" /></Nav.Link>
                        </LinkContainer>
                        <LinkContainer className='ml-3' to='/googleform'>
                            <Button variant='warning' className='contact-btn d-sm-btn-sm'>AFILIARME</Button>
                        </LinkContainer>
                        {userInfo ? (
                            <NavDropdown title='admin' id='admin'>
                                <NavDropdown.Item>
                                    <LinkContainer to='/gestionarnoticias'>
                                        <Nav.Link>Gestionar</Nav.Link>
                                    </LinkContainer>
                                </NavDropdown.Item>
                                <NavDropdown.Item className='ml-2 pr-4' onClick={logoutHandler}>
                                    Salir
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <LinkContainer to='/gestionarnoticias'>
                                    <Nav.Link className="d-none">Noticias</Nav.Link>
                                </LinkContainer>
                         )}
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;
