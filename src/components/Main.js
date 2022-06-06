import {Routes, Route} from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import Search from "./Search";
import Landing from "./Landing";
import UserContainer from "./UserContainer";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/user" element={<UserContainer/>}/>
      </Routes>
    </main>
  )
}

export default Main