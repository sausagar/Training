import React from 'react';

import {NavLink} from 'react-router-dom';

export class Header extends React.Component {
    
    // Step1 
    constructor(props) {
        super(props);
        console.log("header created " + props.title);
    }
    
    //Step2
    componentWillMount() {
        console.log("componentWillMount");
    }
    
    //Step3
    // returns a view
    render() {
        console.log("render");
        return (
            <div>
                <h2> React App </h2>
                
                <div>
                   <NavLink to="/" exact className="button" activeClassName="success">Home</NavLink>
                   <NavLink to="/products" className="button" activeClassName="success">Products</NavLink>
                   <NavLink to="/about" className="button" activeClassName="success">About</NavLink>        
                   <NavLink to="/contacts" className="button" activeClassName="success">Contacts</NavLink>
                   <NavLink to="/cart" className="button" activeClassName="success">Cart</NavLink>
                   <NavLink to="/counter" className="button" activeClassName="success">Counter</NavLink>
                </div>
            </div>
        );
    }

    //Step 4
    // Real DOM Ready
    // The rendered view displayed on real DOM.
    //View Ready
    componentDidMount() {
        console.log("componentDidMount");
    }


}

Header.defaultProps = {
    title: "My default Prop"
}