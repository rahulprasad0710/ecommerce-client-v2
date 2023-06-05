import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer";

function App() {
    return (
        <div className='app'>
            <Navbar />
            <div className='page-container'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
