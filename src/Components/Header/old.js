import {
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Form,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink
                to="/"
                className={(navDate) => (navDate.isActive
                    ? 'nav-link text-capitalize shadow  '
                    : 'nav-link text-capitalize')}
              >
                  Home
              </NavLink>
              <NavLink
                to="/posts"
                className={(navDate) => (navDate.isActive
                    ? 'nav-link text-capitalize shadow'
                    : 'nav-link text-capitalize')}
              >
                  Posts
              </NavLink>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Offer 50%
                </Nav.Link>
            </Nav>
            <form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
