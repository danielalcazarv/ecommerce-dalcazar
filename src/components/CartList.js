import CartItem from "./CartItem";

const CartList = ({ cart, removeItem, cantidadTotal, precioTotal }) => {
    return (
        <table className=" table table-default">
            <thead>
                <tr className="text-center">
                    <th scope="col"></th>
                    <th scope="col">PRODUCTO</th>
                    <th scope="col">PRECIO UNIT.</th>
                    <th scope="col">CANTIDAD</th>
                    <th scope="col">PRECIO TOTAL</th>
                    <th scope="col">QUITAR</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(cart=>{
                    return <CartItem key={cart.item.id} cart={cart} removeItem={removeItem} />
                    })}
                <tr className="table-active text-center">
                    <th scope="row" colSpan="3">TOTAL FINAL</th>
                    <td>{cantidadTotal}</td>
                    <td>{`USD $ `+precioTotal}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default CartList