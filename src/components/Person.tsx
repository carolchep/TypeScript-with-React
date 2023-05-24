type PersonProps = {
    name: {
        first: string
        last: string
    }
}
export const Person = ({name}: PersonProps) => {
    return (
        <div>
            {name.last}and {name.first}
        </div>
    )
}