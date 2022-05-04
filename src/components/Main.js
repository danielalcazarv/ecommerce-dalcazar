import {Routes, Route} from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import Search from "./Search";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenido a Wheelies! No olvides revisar nuestra sección de OFERTAS."}/>}/>
        <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </main>
  )
}

export default Main