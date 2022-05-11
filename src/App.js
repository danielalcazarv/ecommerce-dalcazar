import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { CustomProvider } from "./context/CartContext";

const App = () => {
    return (
        <CustomProvider>
            <BrowserRouter>
                <NavBar/>
                <Main/>
                <Footer/>
            </BrowserRouter>
        </CustomProvider>
    )
};

export default App;