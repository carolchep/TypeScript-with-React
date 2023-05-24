import React from "react"

type ButtonProps={
    handleClick :(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}

export const Button =({handleClick}:ButtonProps)=>{
    return(
        <button onClick={event=>handleClick(event,1)}>
        </button>
    )
}
//Accept a click event as a prop and pass it on to the html button elemnt 
// handleClick :()=>void used in a situation where handleclick function isn't returning anythingit 
// when you need the event to be passed in to your click handler