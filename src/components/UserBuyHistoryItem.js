
const UserBuyHistoryItem = ({ventas}) => {
    const fecha = ventas.date.toDate().toUTCString()
    return (
        <tr className="text-center align-middle">
            <th>{ventas.id}</th>
            <td>{fecha}</td>
            <td>{ventas.items.length}</td>
            <td>{"USD $ "+ventas.total}</td>
        </tr>
    )
}

export default UserBuyHistoryItem