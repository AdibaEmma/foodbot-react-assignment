import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { order_details } from '../actions/orders'
import OrderSummary from "./Orders/OrderSummary";
import UserDetails from './Users/UserDetails';

function App({ order, order_details }) {

  useEffect(() => {
    order_details()
  }, [order_details])
console.log(order);
  return (
    <div className="container mt-3 bg-white">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={ props => <OrderSummary { ...props } order={order} />} /> 
          <Route path="/users/:id" exact render={ props => <UserDetails { ...props } order={order} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { order: state.order}
}
export default connect(mapStateToProps, { order_details })(App)