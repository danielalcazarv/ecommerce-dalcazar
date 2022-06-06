import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { CustomProvider } from "./context/CartContext";
import { CustomUserProvider } from "./context/UserContext";

const App = () => {
    return (
        <CustomUserProvider>
            <CustomProvider>
                <BrowserRouter>
                    <NavBar/>
                    <Main/>
                    <Footer/>
                </BrowserRouter>
            </CustomProvider>
        </CustomUserProvider>
    )
};

export default App;