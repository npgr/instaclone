import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";

export default function Navigation() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            //@ts-ignore
            render={(props) => <route.component {...props} />}
          />
        ))}
      </Switch>
    </Router>
  );
}
