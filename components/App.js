import React from "react";
import "/public/styles.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* <Route path="/">
            <Header />
            <Home />
          </Route> */}
          <Route path='/'>
            <Header />
            <Checkout />

          </Route>
        </Switch>
      </div>
    </Router>
  );
}
