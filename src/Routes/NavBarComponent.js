import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

import HomePage from "../Pages/HomePage";
import MentorCalendar from "../Pages/MentorCalendar";
import Mentor from "../Pages/Mentor";
import HelpSection from "../Pages/HelpSection";
import Login from "../Pages/Login";

export const NavBarComponent = () => {
  const [user, setUser] = useState("Log In");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      console.log(foundUser);
      setUser(loggedInUser);
    } else {
      setUser("Log In");
    }
  }, [localStorage.getItem("user")]);

  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser("Log In");
  };

  return (
    <div>
      <Router>
        <div>
          <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
              <Navbar.Brand href="/">Teacher's Pet</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/"}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/mentor">
                    Mentor
                  </Nav.Link>
                  <Nav.Link as={Link} to="/mentorcalendar">
                    Mentor Calendar
                  </Nav.Link>
                  <Nav.Link as={Link} to="/helpsection">
                    Help Section
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    {user}
                  </Nav.Link>
                </Nav>
                {user === "Log In" ? (
                  ""
                ) : (
                  <div>
                    <Button onClick={() => logoutUser()}>Log Out</Button>
                  </div>
                )}
              </Navbar.Collapse>
            </Container>
          </Navbar>{" "}
        </div>

        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mentor" element={<Mentor />} />
            <Route path="/mentorcalendar" element={<MentorCalendar />} />
            <Route path="/helpsection" element={<HelpSection />} />

            <Route path="/login" element={<Login />} />
            {/* <Route path="/catalog/item/:id" element={<ItemDetail />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
};
