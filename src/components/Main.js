import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"

const Main = () => {
  return (
    <main>
        <ItemListContainer greeting={"Bienvenido a Wheelies! No olvides revisar nuestra sección de OFERTAS."}/>
        <ItemDetailContainer/>
    </main>
  )
}

export default Main