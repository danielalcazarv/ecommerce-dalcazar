import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
        <NavBar/>
        <Main/>
        <Footer/>
        </BrowserRouter>
    )
};

export default App;