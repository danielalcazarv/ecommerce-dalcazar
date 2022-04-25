import ItemCount from "./ItemCount"
const ItemListContainer = ({greeting}) => {

    const onAdd = ()=>{}
    
    return (
        <div className="item__list">
            <p className="container text-center">
            {greeting}
            </p>
            <ItemCount stock={10} init={0} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer