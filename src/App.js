import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  Categories,
  AllPro,
  Profile,
  Expedientes,
  Abogados,
  Actprofile,
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
          <Route path="/page.expedientes">
            <Expedientes />
          </Route>
          <Route path="/page.abogados">
            <Abogados />
          </Route>
          <Route path="/page.actprofile">
            <Actprofile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


