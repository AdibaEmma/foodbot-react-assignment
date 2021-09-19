import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import OrderSummary from "./Orders/OrderSummary";
import UserDetails from './Users/UserDetails';
import Orders from "./Orders/Orders";

function App({ order, order_details }) {

  return (
    <div className="container mt-3 bg-white">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={OrderSummary} />
          <Route path="/users/:id" exact component={UserDetails} />
          <Route path="/orders" exact component={Orders} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App