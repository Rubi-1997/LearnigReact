// event handling using function clicked 

import React from 'react';

function FunctionClicked (){

    function clikedbutton(){

        console.log("button has clicked")
    }
     return (
        <div>
            <button onClick={clikedbutton}>click me</button>
        </div>
     )
}

export default FunctionClicked