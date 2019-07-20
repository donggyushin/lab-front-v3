import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainInterface from "../../routes/private/mainInterface";
import FNInterface from "../../routes/private/functionalityInterface";

const Container = styled.div`
  margin-top: 20px;
`;

const Presenter = ({ loading, userLevel }) => (
  <Container>
    {loading ? (
      "loading... "
    ) : (
      <Router>
        <Switch>
          <Route path="/" exact component={MainInterface} />
          <Route path="/v1/:fn" exact component={FNInterface} />
          <Route component={MainInterface} />
        </Switch>
      </Router>
    )}
  </Container>
);

export default Presenter;
