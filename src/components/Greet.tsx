type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}
export const Greet = (props: GreetProps) => {
    return (
        <div>
            {
                props.isLoggedIn ?
                <>
                    <h2>Hello its {props.name} and im {props.messageCount}</h2>

                </>:
                <>
                <h2>hey</h2>
                </>

            }
        </div>
    )
}
