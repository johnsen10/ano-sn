import { useState } from "react"
import { Link } from "react-router-dom";

export default function NavBar(){

    const [changeHeader, setChangeHeader] = useState(false);

    const onChangeHeader = ()=> {
        window.scrollY >= 50 ? setChangeHeader(true) : setChangeHeader(false) ;
      }
    window.addEventListener('scroll', onChangeHeader);
    return(
        <>
        <header className={changeHeader ? "bg-white top-0 left-0 z-50 fixed transition duration:500 w-full":"bg-transparent top-0 left-0 z-50 fixed transition duration:500 w-full"} >
            <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
                {/* left side of the navbar*/}
                <div className="flex flex-grow">
                    <img className="w-24 h-24 rounded-full sm:mx-0 sm:shrink-0 cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGAmps0dw-tVxMSzGKrIHQCjJ-aHZD5g8DaNhTnVP7vHZFt688ry8tDVG7ukaG0qk_XQ&usqp=CAU" />
                </div>

                {/* right side of the navbar */}
                <>
                    <div className="flex items-center justify-end space-x-6">
                    <Link to="/" className="poppins focus:outline-none transform transition duration-700 hover:scale-105">Autos</Link>
                    {/* <Link to="autos" className="poppins ">Autos</Link> */}
                    <Link to="a-propos" className="poppins focus:outline-none transform transition duration-700 hover:scale-105">A propos</Link>
                    <Link to="nous-joindre" className="px-6 py-3 bg-blue-700 text-white rounded-full ring-blue-500 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105">joindre</Link>
                    </div>
                </>
            </nav>
        </header>
        </>
    )
}