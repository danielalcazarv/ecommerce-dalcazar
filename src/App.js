import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
    return (
        <>
        <NavBar/>
        <ItemListContainer greeting={"Bienvenido a Wheelies! No olvides revisar nuestra sección de OFERTAS."}/>
        <ItemDetailContainer/>
        <Main/>
        <Footer/>
        </>
    )
};

export default App;