import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import "./index.css";

function NavBar() {
  return (
    <>
      <Nav variant="" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" id="mynav-items">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" id="mynav-items">
            Daily Bulletin
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" id="mynav-items">
            About us
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavBar;
