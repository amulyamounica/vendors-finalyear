import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
import "./header.css";
export default function Header(props) {
  var history = useHistory();
  const clickMe = () => {
    history.push("/Login");
  };
  var p = localStorage.getItem("session1");
  return (
    <>
      <div className="App-h1 divH">
        <Navbar className="navH" bg="#9575CD" expand="lg">
          <Navbar.Brand href="/Home" style={{ marginTop: "-10px" }} true>
            <img src="/logo.png" className="App-h1"></img>
          </Navbar.Brand>
        </Navbar>
        <Navbar
          className="navH"
          bg="#9575CD"
          style={{
            marginTop: "-50px",
            marginLeft: "800px",
            color: "black",
          }}
          expand="lg"
        >
          <Nav.Link
            href="/Orders"
            style={{
              display: props.login ? "block" : "none",
              color: "black",
              marginTop: "-30px",
            }}
          >
            Orders
          </Nav.Link>
          <Nav.Link
            href="/addItems"
            style={{
              display: props.login ? "block" : "none",
              color: "black",
              marginTop: "-30px",
            }}
          >
            Add Items
          </Nav.Link>
          <Nav.Link
            href="/items"
            style={{
              display: props.login ? "block" : "none",
              color: "black",
              marginTop: "-30px",
            }}
          >
            MyItems
          </Nav.Link>

          <div
            className="b"
            style={{
              display: props.login ? "block" : "none",
              color: "black",
              marginTop: "-30px",
            }}
          >
            <NavDropdown
              style={{
                display: props.login ? "block" : "none",
                color: "black",
              }}
              title={<PersonCircle size={35}></PersonCircle>}
              className="drop"
              id="basic-nav-dropdown"
            >
              <NavDropdown.ItemText
                style={{ color: "black" }}
                className="font"
              ></NavDropdown.ItemText>
              <p>
                <center>{p}</center>
              </p>
              <NavDropdown.Item href="/profile ">Profile</NavDropdown.Item>
              <NavDropdown.Item href="./Logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </div>
          <a style={{ display: props.login ? "none" : "block" }} href="/Login">
            <Button
              style={{
                width: "80px",
                height: "40px",
                marginTop: "-40px",
                marginLeft: "300px",
              }}
            >
              Login
            </Button>
          </a>
        </Navbar>
      </div>
    </>
  );
}
