import { NavLink } from "react-router-dom";
import './style.css';

const Navbar = () => {
  return (
    <div className="navbar lg:px-10 bg-purple-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">
                <a className="font-semibold">Home</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/allart">
                <a className="font-semibold">All Art & craft Items</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/addcrafti">
                <a className="font-semibold">Add Craft Item</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/mylist">
                <a className="font-semibold">My Art&Craft List</a>
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="font-bold text-4xl bg-gradient-to-r from-[#007F73] via-[#126e65a8] to-[#007f72d2] inline-block text-transparent bg-clip-text">Artistry </a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal space-x-2">
          <li>
            <NavLink to="/">
              <a className="font-semibold">Home</a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/allart">
              <a className="font-semibold">All Art & craft Items</a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/addcrafti">
              <a className="font-semibold">Add Craft Item</a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/mylist">
              <a className="font-semibold">My Art&Craft List</a>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="space-x-2">
          <NavLink to="/login">
            <a className="lg:px-5 px-3 py-2 rounded cursor-pointer  bg-[#0E46A3] hover:bg-[#203a64] text-white font-bold">
              Log in
            </a>
          </NavLink>
          <NavLink to="/register">
            <a className="lg:px-5 px-3 py-2 rounded cursor-pointer  bg-[#D20062] hover:bg-[#D200A6] text-white font-bold">
              Register
            </a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
