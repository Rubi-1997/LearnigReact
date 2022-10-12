import React from 'react';

function Greet(props)
{
    return ( <div>
    <h1>hello{props.name} {props.heroname} </h1>
    {props.children}
    </div>
    
    )
}
 export default Greet;
// const Greet=()=><h1>Helloo Vishwash</h1>;