import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import {App} from './App'

import Counter from './components/CounterContainer'

import ProductRoutes from "./product/Routes";

import Cart from "./cart/containers/Cart"

export default function Routes(props) {
    return (

        <Router>
          <App>
             <Switch>
                 <Route path="/" exact component={Home}/>
                 <Route path="/contacts" component={Contact}/>
                 <Route path="/about" component={About}/>

                  <Route path="/products">
                      {ProductRoutes}
                  </Route>

                  <Route path="/counter" component={Counter}>
                      
                  </Route>

  <Route path="/cart" component={Cart}>
                      
                  </Route>

                 <Route path="/*" component={NotFound}/>
             </Switch>
         </App>              
        </Router>

    )
}