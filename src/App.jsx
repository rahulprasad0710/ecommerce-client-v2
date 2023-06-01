import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
    return (
        <div className='app'>
            <Navbar />
            <div className='page-container'>
                <Outlet />
            </div>
            <h3>Footer</h3>
        </div>
    );
}

export default App;
