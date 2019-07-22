import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ShopConnector } from "./components/shop/ShopConnector";
import configureStore from "./store";

const store = configureStore();

export default class App extends Component
{
  render = () => {
    return <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/shop" component={ShopConnector} />
          <Redirect to="/shop" />
        </Switch>
      </Router>
    </Provider>
  };
}
