import React from 'react';
import Header from './component/header/Header'
import Home from './component/home/Home'
import Checkout from './component/checkout/Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
