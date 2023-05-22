type ButtonProps={
    handleClick :()=>void
}

export const Button =(props:ButtonProps)=>{
    // return(
    //     <button onClick={props.handleClick}>
    //     </button>
    // )
}
//Accept a click event as a prop and pass it on to the html button elemnt 
// handleClick :()=>void used in a situation where handleclick function isn't returning anythingit 