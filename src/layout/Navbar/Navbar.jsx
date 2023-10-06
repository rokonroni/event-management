import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const NavLinks = 
    <>
      <li>
        <NavLink to="/" className={({ isActive, isPending }) =>
                  isPending
                    ? "bg-none"
                    : isActive
                    ? "text-[#FF444A] font-bold text-lg "
                    : "font-bold text-lg hover:bg-transparent hover:text-[#FF444A] focus:bg-white focus:text-[#FF444A]"
                }>Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive, isPending }) =>
                  isPending
                    ? "bg-none"
                    : isActive
                    ? "text-[#FF444A] font-bold text-lg "
                    : "font-bold text-lg hover:bg-transparent hover:text-[#FF444A] focus:bg-white focus:text-[#FF444A]"}>Contact Us</NavLink>
      </li>
    </>
  return (
    <div className="container bg-transparent mx-auto">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {NavLinks}
            </ul>
          </div>
          <a className="normal-case text-2xl font-bold">
            Event <span className="text-red-600 "> Management</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login' className="btn bg-red-500 text-white font-bold hover:bg-red-700">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
