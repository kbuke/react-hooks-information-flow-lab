// Create Header component by refactoring the <header> element out of the App component. 
//Clicking on <button> inside of the Header component should still toggle dark mode on and off.

// You will need to pass a callback function as a prop called onDarkModeClick to the Header component in order for the test to pass.

import React from "react";

function Header({onDarkModeClick, color}){
    return(
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {color ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header