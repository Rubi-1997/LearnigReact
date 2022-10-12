import React from 'react'
import Component1 from './Component1';
import Component2 from './Component2';

export default function() {
    const name="Suresh";
    // let data;
//     if(name=="Suresh"){
//         data= <Component1 />
//     }
//    else {
//         data=<Component2/>
//    }
// using if else conditional statement
//   return (
//     <div>{name=="Suresh" && <h1>hello Suresh</h1>}</div>  
//     // using conditional operator and
//   )


  return (
    <div>{name=="Sures"? <h1><Component1/></h1>:<h1><Component2/></h1>}</div>  
     // using tertionary  operator 
  )


}
