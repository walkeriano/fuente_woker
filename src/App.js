import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  Categories,
  AllPro,
  Profile,
} from "./pages"

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/categories/page-categories">
            <Categories />
          </Route>
          <Route path="/all-pro/page-all-pro">
            <AllPro />
          </Route>
          <Route path="/page-profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


