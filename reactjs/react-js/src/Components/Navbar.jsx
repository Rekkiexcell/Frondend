import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
       <>
      <div className="bg-black navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Menu</a>
                <ul className="p-2">
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <Link to='/'><a className="btn btn-ghost text-xl">Home</a></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <Link to='/profile'><li><a>Profile</a></li></Link>
            <li>
              <details>
                <summary>Submenu</summary>
                <ul className="p-2">
                <Link to='/todos'><li><a>ToDo</a></li></Link>
                  <Link to='/fetching'><li><a>Fetching</a></li></Link>
                </ul>
              </details>
            </li>
            <Link to='/about'><li><a>About</a></li></Link>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login'> <a className="btn">Login</a></Link>
        </div>
      </div>
       </>
    )
}