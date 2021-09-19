import { BrowserRouter, Route, Switch } from "react-router-dom";

import OrderSummary from "./Orders/OrderSummary";
import UserDetails from './Users/UserDetails'

function App() {
  return (
    <div className="container mt-3 bg-white">
       <BrowserRouter>
         <Route path="/" exact component={OrderSummary} />
         <Route path="/users/id" exact component={UserDetails} />
       </BrowserRouter>
    </div>
  );
}

export default App;
