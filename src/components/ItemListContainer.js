
const ItemListContainer = ({greeting}) => {
    greeting = "Bienvenido a Wheelies! No olvides revisar nuestra sección de OFERTAS."

    return (
        <div className="item__list">
            <p className="container text-center">
            {greeting}
            </p>
        </div>
    )
}

export default ItemListContainer