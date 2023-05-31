import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <h3>Footer</h3>
        </div>
    );
}

export default App;
