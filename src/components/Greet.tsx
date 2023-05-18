type GreetProps={
    name:string
    messageCount:number
}
export const Greet =(props:GreetProps)=>{
    return(
        <div>
            <h2>Hello its {props.name} and im {props.messageCount}</h2>
        </div>
    )
}
