import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";

const AppHeader = (props) => {
  const { isLoggedIn, onClickLogout } = props;
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="light"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          CS MASTER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            {isLoggedIn && (
              <Nav.Link as={Link} to="/learning">
                CS STUDY
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link as={Link} to="/quiz">
                CS QUIZ
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link as={Link} to="/mypage">
                MY PAGE
              </Nav.Link>
            )}
            {isLoggedIn ? (
              <Nav.Link as={Link} to="/logout" onClick={onClickLogout}>
                LOGOUT
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                LOGIN
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AppHeader;
