import Items from "./Items";

const ItemList = ({productos}) => {
    return(
        <section className="row">
            {productos.map(producto=>{
                return(
                    <Items key={producto.id} producto={producto}/>
                )
            })}
        </section>
    )
}

export default ItemList