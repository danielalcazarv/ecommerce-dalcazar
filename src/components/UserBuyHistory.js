import UserBuyHistoryItem from "./UserBuyHistoryItem"

const UserBuyHistory = ({ventas}) => {
    return (
        <table className=" table table-default">
            <thead>
                <tr className="text-center">
                    <th scope="col">ID</th>
                    <th scope="col">FECHA</th>
                    <th scope="col">CANTIDAD TOTAL</th>
                    <th scope="col">PRECIO TOTAL</th>
                </tr>
            </thead>
            <tbody>
                {ventas.map(ventas=>{
                    return <UserBuyHistoryItem key={ventas.id} ventas={ventas} />
                    })}
            </tbody>
        </table>
    )
}

export default UserBuyHistory