import CartItem from "./CartItem";

const CartList = ({ cart, removeItem, cantidadTotal, precioTotal }) => {
    //console.log("cartlist q hay aca")
    //console.log(key)

    const remover =() => {
        removeItem()
    }

    return (
        <table className=" table table-default">
            <thead>
                <tr>
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
                    return <>
                    <tr>
                        <CartItem key={cart.item.id} cart={cart}/>
                        <td>
                            <button onClick={remover} className="btn btn-success p-0 mx-2">
                                <span className="material-icons">
                                    close
                                </span>
                            </button>
                        </td>
                    </tr>
                    </>
                })}
                <tr className="table-active">
                    <th scope="row" colSpan="3">TOTALES</th>
                    <td>{cantidadTotal}</td>
                    <td>{`USD $ `+precioTotal}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default CartList