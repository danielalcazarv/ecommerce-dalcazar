import {Routes, Route} from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenido a Wheelies! No olvides revisar nuestra sección de OFERTAS."}/>}/>
        {/*<Route path="/categoria/:categoriaId" element={} />*/}
        <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
        {/*<Route path="cart" element={}/>*/}
      </Routes>
    </main>
  )
}

export default Main