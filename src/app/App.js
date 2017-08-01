import React from 'react';


import { Header } from './components/Header';
import { Footer } from './components/Footer';

import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

import { Address } from './components/About';

import PropTypes from 'prop-types';


export class App extends React.Component {

    parentHandler() {
          alert("Call to parent");
    }


    getChildContext() {
          return {
                address : {
                      city: 'Pune',
                      state: 'MH'
                },
                color : 'red'  
          }
    }

      render() {
            return (
            <div>
            <div><Header title="Product App" /> </div>
                 
            
            <div>
                {this.props.children}  
            </div>



            <div><Footer company="DBOI" year={2017} handler={this.parentHandler}/>
            </div>
            </div>  )    
      }
}


App.childContextTypes = {
    address: PropTypes.shape({
            city: PropTypes.string,
            state: PropTypes.string
        })
    ,  color : PropTypes.string
}