import { memo } from "react";


const CartItem = ({ cart, removeItem }) => {
            /*console.log("que hay aca cartitem")
            console.log(cart)
            const remover =() => {
                removeItem(cart.item.id)
            }*/

    return (
        <>
            <th scope="row"><img src={cart.item.img} className="img-fluid rounded-start cart__img" alt={cart.item.titulo}/></th>
            <td>{cart.item.titulo}</td>
            <td>{`USD $ `+cart.item.precio}</td>
            <td>{cart.quantity}</td>
            <td>{`USD $ `+cart.item.precio*cart.quantity}</td>
        </>
    )
}

export default memo ( CartItem )