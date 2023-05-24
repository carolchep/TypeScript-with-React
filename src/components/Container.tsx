type ContainerProps={
    styles:React.CSSProperties
}

export const Container =({styles}:ContainerProps)=>{
return(
    // <div style ={{border:'1px solid black',padding :'1rem'}}>
    <div style ={styles}>
        Text goes here style
    </div>
)

}