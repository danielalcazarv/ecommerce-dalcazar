import { createContext , useState } from "react";

export const CartContext = createContext();

const {Provider} = CartContext;

export const CustomProvider = ({ defaultValue = [], children}) =>{

    const [cart, setCart] = useState(defaultValue)

    const isInCart = (id) =>{
        return cart.find(e => e.item.id === id);
    }

    const addItem = (item , quantity) =>{
        if (isInCart(item.id)){
            console.log("si esta")
            const newCart = [...cart];
            for (const element of newCart){
                if (element.item.id == item.id){
                    element.quantity = element.quantity + quantity;
                }
            }
            setCart(newCart)
        }else{
            setCart([
                ...cart,
                {
                    item:item,
                    quantity:quantity,
                }
            ])
        }
    }

    const removeItem = (id) =>{
        const newCart = [...cart].map(element => element.id !== id);
        setCart(newCart);
    }

    const clearItem = () =>{
        setCart([])
    }

    return (
        <Provider value={{cart, addItem, removeItem, clearItem}}>
            {children}
        </Provider>
    )
}

export default CartContext;