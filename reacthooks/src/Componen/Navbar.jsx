import { CiShoppingCart, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="bg-red-500 text-white h-[50px] flex items-center">
            <span>
                <Link to='/'>
                    Home
                </Link>
            </span>
            <span>
                <Link to='/profile'>
                    Profile
                </Link>
            </span>
            <span>
                <Link to='/hooks'>
                    Hooks
                </Link>
            </span>
        </nav>
    )
}