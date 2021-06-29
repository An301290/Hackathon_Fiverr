import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="md:px-32 w-full h-22 flex justify-between items-center bg-navbarbg">
      <div className="text-2xl text-secondary font-bold">
        <Link to="/">LOGO</Link>
      </div>
      <ul className="md:w-200 flex justify-between font-semibold text-sm text-justify	 text-primary">
        <li>
          <NavLink to="/create-new-event" activeClassName="text-secondary">
          create new event
          </NavLink>
        </li>
        <li>
          <NavLink to="/show-events" activeClassName="text-secondary">
          Show Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/your-events" activeClassName="text-secondary">
          Your events
          </NavLink>
        </li>
        <li>
          <NavLink to="/change-city" activeClassName="text-secondary">
          Change city
          </NavLink>
        </li>
      </ul>
      <ul className="w-40 flex items-center justify-between  ">
        <Link to="signin">
          <button className="text-secondary font-bold tracking-wide2">
            Sign In
          </button>
        </Link>
        <Link to="signup">
          <button className="w-23 h-11 font-bold tracking-wide2 bg-primary text-white">
            Sign Up
          </button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
