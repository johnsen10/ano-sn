import NavBar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function EntryScreen(){
    return(
        <>
            <NavBar/>
            <Outlet/>
            {/* <Footer/> */}
        </>
    )
}