type StatusProps = {
    status: 'loading' | 'error ' | 'success '
}

export const Status = (props: StatusProps) => {
    let message
    if (props.status === "loading") {
        message = "loading"
    } else if (props.status === "error") {
        message = "Error fetching data"

    }
    else if (props.status === "success") {
        message = "Data Fetched Succefully"

    }

    return (
        <div>
            <h2>
                Status- {message}
            </h2>
        </div>
    )
}