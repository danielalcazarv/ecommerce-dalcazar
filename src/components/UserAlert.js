
const UserAlert = ({message}) => {
    return (
        <div className="text-center bg-danger bg-opacity-25">
            <span className="mx-auto text-center text-danger">{message}</span>
        </div>
    )
}

export default UserAlert