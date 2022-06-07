import {Routes, Route} from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import Search from "./Search";
import Landing from "./Landing";
import UserRegister from "./UserRegister";
import UserLogin from "./UserLogin";
import UserLogged from "./UserLogged"
import { ProtectedRoute } from "./ProtectedRoute";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/micuenta" element={
          <ProtectedRoute>
            <UserLogged/>
          </ProtectedRoute>}/>
        <Route path="/register" element={<UserRegister/>}/>
      </Routes>
    </main>
  )
}

export default Main