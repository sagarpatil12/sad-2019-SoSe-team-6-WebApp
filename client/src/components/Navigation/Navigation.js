import React from 'react';
import "./Navigation.css";

const Navigation = () => {
    return (
        <div class="dib fr pa4">  

        <button type="button" class="f6 link dim br3 ph3 pv2 mb2  white bg-dark-blue ph3 " >Register</button>
        
        <button id="btnsign" type="button" class="f6 link dim br3 ph3 pv2 mb2  white bg-dark-blue ml3 mr0">Sign In</button>
        </div>
    );
}

export default Navigation;