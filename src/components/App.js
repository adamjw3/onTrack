import React from "react";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Posts from "./Posts";
import "../styles/custom.scss";

const App = () => {
  return (
    <Container>
      <Row>
        <Router>
          <Route path=":page?" component={Posts} />
        </Router>
      </Row>
    </Container>
  );
};

export default App;
