import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function StickyHeader() {
  return (
    <>
      <Navbar bg="light" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipOuxNS33NFqvEOaHQj7SmuWZDU2d2nPQLtU2N6V=s1360-w1360-h1020"
              alt="logo"
              style={{ width: "110px" }}
            />{" "}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default StickyHeader;
