type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}
export const Greet = ({name,messageCount,isLoggedIn}: GreetProps) => {
    return (
        <div>
            {
                isLoggedIn ?
                <>
                    <h2>Hello its {name} and im {messageCount}</h2>

                </>:
                <>
                <h2>hey</h2>
                </>

            }
        </div>
    )
}
