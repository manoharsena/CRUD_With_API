import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function TopNavbar() {
    let navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>
              <h1 style={{color:"#2a78ac"}}>
                <b>Dashboard</b>
              </h1>
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link onClick={() => navigate("/create")}>
              <Button variant='success'>Create User</Button>
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;