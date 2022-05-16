import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext"

const CartWidget = () => {
    const {cantidadTotal} = useContext(CartContext)
    return (
        <Link to="/cart" className="position-relative">
            <span className="material-icons">
                shopping_cart
            </span>
            {cantidadTotal==0?<span></span>:
            <span className="position-absolute start-100 translate-middle badge rounded-pill bg-success">
                {cantidadTotal}
                <span className="visually-hidden">unread messages</span>
            </span>}
        </Link>
    )
}

export default CartWidget