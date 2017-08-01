//functional component
import React from "react";
import PropTypes from 'prop-types';

export function Footer(abc) {
    
    
   
    return (
        <div>
            <hr />
            <p> Copyrights {abc.company} {abc.year}</p>
            <button onClick={() => abc.handler()}>Contact</button>
        </div>
    )
}

Footer.propTypes = {
    year: PropTypes.number.isRequired,
    company: PropTypes.string,
    handler : PropTypes.func
}