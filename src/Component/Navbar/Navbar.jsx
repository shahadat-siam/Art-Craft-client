import { NavLink } from "react-router-dom";
import "./style.css";
import UseAuth from "../Hook/UseAuth";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOutUser } = UseAuth();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const hundleToggle = (e) => {
    if (e.target.checked) {
      setTheme("luxury");
    } else {
      setTheme("light");
    }
  };
  console.log(theme);

  return (
    <div className="navbar sticky top-0 z-40 lg:px-10 bg-[transparent] shadow-md">
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

            <li>
              <label className="mr-2  w-16 lg:hidden cursor-pointer grid place-items-center">
                <input
                  type="checkbox"
                  onChange={hundleToggle}
                  value="synthwave"
                  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                />
                <svg
                  className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                  className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </li>
          </ul>
        </div>
        <a className="font-bold text-4xl bg-gradient-to-r from-[#007F73] via-[#126e65a8] to-[#007f72d2] inline-block text-transparent bg-clip-text">
          Artistry{" "}
        </a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal space-x-1">
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
        <label className="mr-2   hidden cursor-pointer lg:grid place-items-center">
          <input
            type="checkbox"
            onChange={hundleToggle}
            value="synthwave"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        {/* <a id="using-react-tooltip">Hi Hello</a> */}

        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  id="using-react-tooltip"
                  // title={`${user.displayName}`}
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/31H6Z4N/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm  btn-ghost">
                  {user?.displayName || "user name not found"}
                </button>
              </li>
              <li>
                <button onClick={logOutUser} className="btn btn-sm  btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-x-2 ">
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
        )}
      </div>
      <Tooltip
        anchorSelect="#using-react-tooltip"
        content={`${user.displayName}`}
        style={{ backgroundColor: "rgba(0, 0, 0, 14)", color: "#FFF" }}
      />
    </div>
  );
};

export default Navbar;
