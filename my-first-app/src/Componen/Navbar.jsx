import { useContext } from "react";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { userDataContext } from "../Data/userDataContext"

export default function Navbar(){

    const {user, setUser} = useContext(userDataContext)

    return(
        <nav>
            <div className="height-[30px] pl-3">
                 <h1 className="text-xl">
                    Prepps Studio
                 </h1>
            </div>
            <div className="bg-red-700 text-white px-3 flex justify-between items-center">
                <div className="flex items-center gap-24">
                    <div>
                        <Link to='/'>
                            <img src="https://preppstudio.com/assets/prepp-studio-5609aeb0.png" width="130px" height="130px" />
                        </Link>
                    </div>
                    <div>
                        HOT ITEMS 
                    </div>
                    <div>
                        MONOLITE SHIRT
                    </div>
                </div>
                <div className="flex items-center">
                   
                    <div>
                        {
                            user?
                            <span onClick={() => setUser(null)}>
                                {user}
                            </span>
                              
                                :
                                
                        <Link to='/register'>
                        <CiUser className="text-white text-3xl" />
                        </Link>
                        }
                    </div>
                    <div className="relative">
                        <CiShoppingCart className="text-white text-3xl" />
                        <span className="absolute top-[-10px] right-[-10px] bg-white text-black rounded-full px-2 py-1 text-xs">
                            1
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}