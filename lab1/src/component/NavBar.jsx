import { Container, Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function NavBar ()
{
    return( 
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Link as={Link} to="/">Home</Link>
        <Link as={Link} to="/about">About</Link>
        <Link as={Link} to="/shop">Shop</Link>
        <Link as={Link} to="/button">Button</Link>
        <Link as={Link} to="/register">Register</Link>
        <Link as={Link} to="/login">Login</Link>
      </Container>
    </Navbar>
    )
}

export default NavBar;