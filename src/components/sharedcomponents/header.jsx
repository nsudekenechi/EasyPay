import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="p-10">
      <nav>
        <NavLink to="/">
          <img src="./Images/logo.png" alt="" />
        </NavLink>
      </nav>
    </header>
  );
};
