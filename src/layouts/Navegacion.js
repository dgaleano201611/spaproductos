import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Navegacion() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to={"/"}>Productos SportWear</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/crearproducto"}>Crear Producto</Nav.Link>
            <Nav.Link as={NavLink} to={"/signup"}>registrarse</Nav.Link>
            <Nav.Link as={NavLink} to={"/signin"}>iniciar sesion</Nav.Link>
            <Nav.Link as={NavLink} to={"/actualizarProducto"}>Editar un producto</Nav.Link>
            <Nav.Link as={NavLink} to={"/misproductos"}>Eliminar Producto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export {Navegacion}