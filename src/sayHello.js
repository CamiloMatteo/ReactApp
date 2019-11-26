import React from 'react';

function hello(){
    const sayHello = () =>{
        console.log("hello");
    }
    return(
        <div>
            <button onClick={sayHello}>Hello!</button>
        </div>
    )
}

export default hello;