import { Outlet } from "react-router-dom"
import NavBar from "./NavBar";


const Root = () => {
    return(
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Root;