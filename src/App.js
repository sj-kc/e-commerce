import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Products from "./components/Products";
import Orders from "./components/Orders";
import NotFound from "./components/NotFount";

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/e-commerce" exact={true} component={Products} />
            <Route path="/e-commerce/orders/:productId" component={Orders} />
            <Redirect to="/e-commerce" />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
