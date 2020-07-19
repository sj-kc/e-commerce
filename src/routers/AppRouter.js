import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Products from "./../components/Products";
export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" exact={true} component={Products} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
