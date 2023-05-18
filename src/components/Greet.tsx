type GreetProps={
    name:string
    age:number
}
export const Greet =(props:GreetProps)=>{
    return(
        <div>
            <h2>Hello its {props.name} and im {props.age}</h2>
        </div>
    )
}
