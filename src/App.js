import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Containers/HomePage";
import DetailPage from "./Containers/DetailPage";
import NoMatchRoute from "./Components/NoMatchRoutes";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/detail">
          <DetailPage />
        </Route>
        <Route path="*">
          <NoMatchRoute />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
