//bootstraping file


//bind react and real DOM

import React from 'react';
import {render} from 'react-dom';

import Routes from "./app/Routes";

import store from "./app/Store";

import {Provider} from "react-redux"; 

// polyfill , add fetch() to window Obj
import "whatwg-fetch"

//mount the react component into the Beowser.
render(<Provider store={store}> 
            <Routes/>
        </Provider>    , document.getElementById('root'));