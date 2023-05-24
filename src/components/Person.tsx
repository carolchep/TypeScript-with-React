import {PersonProps} from './Person.types'

export const Person = ({name}: PersonProps) => {
    return (
        <div>
            {name.last}and {name.first}
        </div>
    )
}