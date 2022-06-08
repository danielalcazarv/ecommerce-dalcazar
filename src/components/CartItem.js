import { memo } from "react";
import { Link } from "react-router-dom";

const CartItem = ({ cart, removeItem }) => {
    const multi = (cart.item.precio*cart.quantity);
    const handleRemove = () =>{
        removeItem(cart.item.id,cart.quantity,multi)
    };

    return (
        <tr className="text-center align-middle">
            <th scope="row">
                <Link className="text-decoration-none text-muted" to={`/item/${cart.item.id}`}>
                    <img src={cart.item.img} className="img-fluid rounded-start cart__img" alt={cart.item.titulo}/>
                </Link>
            </th>
            <td>
                <Link className="text-decoration-none text-muted" to={`/item/${cart.item.id}`}>
                    {cart.item.titulo}
                </Link>
            </td>
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