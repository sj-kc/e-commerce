import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Products from "./components/Products";
import NotFound from "./components/NotFount";

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/e-commerce" exact={true} component={Products} />
            <Redirect to="/e-commerce" />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
