import { memo } from "react";

const CartItem = ({ cart, removeItem }) => {
    const multi = (cart.item.precio*cart.quantity)
    const handleRemove = () =>{
        removeItem(cart.item.id,cart.quantity,multi)
    }

    return (
        <tr>
            <th scope="row"><img src={cart.item.img} className="img-fluid rounded-start cart__img" alt={cart.item.titulo}/></th>
            <td>{cart.item.titulo}</td>
            <td>{`USD $ `+cart.item.precio}</td>
            <td>{cart.quantity}</td>
            <td>{`USD $ `+multi}</td>
            <td>
                <button onClick={handleRemove} className="btn btn-success p-0 mx-2">
                    <span className="material-icons">
                        close
                    </span>
                </button>
            </td>
        </tr>
    )
}

export default memo ( CartItem )