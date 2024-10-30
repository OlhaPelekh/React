import {Container,Nav,Navbar} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import ThemeToggle from '../ThemeToggle.js';

function Header() {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          <ThemeToggle />
        </Container>
      </Navbar>
  );
}

export default Header;