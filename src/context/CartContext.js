import { createContext , useState } from "react";

export const CartContext = createContext();

const {Provider} = CartContext;

export const CustomProvider = ({ defaultValue = [], children}) =>{

    const [cart, setCart] = useState(defaultValue)
    const [cantidadTotal,setCantidadTotal] = useState(0)
    const [precioTotal,setPrecioTotal] = useState(0)

    const isInCart = (id) =>{
        return cart.find(e => e.item.id === id);
    }

    const addItem = (item , quantity) =>{
        if (isInCart(item.id)){
            const newCart = [...cart];
            for (const element of newCart){
                if (element.item.id == item.id){
                    element.quantity = element.quantity + quantity;
                }
            }
            setCantidadTotal(cantidadTotal+quantity)
            setPrecioTotal(precioTotal+item.precio*quantity)
            setCart(newCart)
        }else{
            setCantidadTotal(cantidadTotal+quantity)
            setPrecioTotal(precioTotal+item.precio*quantity)
            setCart([
                ...cart,
                {
                    item:item,
                    quantity:quantity,
                }
            ])
        }
    }

    const removeItem = (id, cantidad, precio) =>{
        const newCart = [...cart].filter((element) => element.item.id !== id);
        setCart(newCart);
        setCantidadTotal(cantidadTotal-cantidad);
        setPrecioTotal(precioTotal-precio);
    }

    const clearItem = () =>{
        setCart([])
        setCantidadTotal(0)
        setPrecioTotal(0)
    }

    return (
        <Provider value={{cart, addItem, removeItem, clearItem, cantidadTotal, precioTotal}}>
            {children}
        </Provider>
    )
}

export default CartContext;