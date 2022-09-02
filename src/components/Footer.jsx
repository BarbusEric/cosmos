import React from "react";
import Container from "react-bootstrap/Container";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <p>Copyright COSMOS 2022. All rights reserved.</p>
        <p>
          All data and company references are purely fictitious and <br />
          shouldn't be confused with real world entities or names.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
