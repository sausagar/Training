import React from "react";

import ProductLayout 
        from "./components/ProductLayout"
    

import ProductSearch 
        from "./components/ProductSearch"


import ProductEdit 
        from "./containers/ProductEdit"


import ProductList
        from "./containers/ProductList";

import {Route, Switch} from "react-router-dom";

export default function Routes(props) {
    return (
       <ProductLayout>
            <Switch>
                <Route path="/products/list" 
                        component={ProductList}>
                </Route>

                <Route path="/products/search" 
                        component={ProductSearch}>
                </Route>

                <Route path="/products/create" 
                        component={ProductEdit}>
                </Route>

                <Route path="/products/edit/:id" 
                        component={ProductEdit}>
                </Route>
                
            </Switch>
        </ProductLayout>
    )
}