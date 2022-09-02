import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";
import { FcShop, FcHome, FcPieChart, FcCapacitor } from "react-icons/fc";
import { useContext } from "react";
import { CartContext } from "../store/cart/context";

function Header() {
  const contextValue = useContext(CartContext);
  const { cartState } = contextValue;
  return (
    <header>
      <Navbar className={styles.nav} variant="dark">
        <Container className={styles.container}>
          <Navbar.Brand className={styles.brand}>COSMOS</Navbar.Brand>
          <Nav className="d-flex justify-content-between w-100">
            <div className={styles.countainer}>
              <Nav.Link className="ms-2 mt-1" href="/">
                <FcHome className="mb-1 me-1" />
                Home
              </Nav.Link>
              <Nav.Link className="ms-2 mt-1" href="/destinations">
                <FcPieChart className="mb-1 me-1" />
                Destinations
              </Nav.Link>

              <Nav.Link className="ms-2 mt-1" href="/spaceships">
                <FcCapacitor className="mb-1 me-1" />
                Spaceships
              </Nav.Link>
            </div>

            <div>
              <Nav.Link className="ms-5 mt-1">
                <div>
                  <FcShop className={styles.icon} />({cartState.products.length}
                  )
                </div>
              </Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
