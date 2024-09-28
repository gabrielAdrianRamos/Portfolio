import { NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { ImMenu } from "react-icons/im";
import { RiCloseLine } from "react-icons/ri";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };
  return (
    <header>
      <div className="header">
        <div className="logo">
          <NavLink to={"/"}>
            <span className="logo-name">AR</span>
          </NavLink>
        </div>
        <nav className={showMenu ? "show-nav" : "hide-nav"}>
          <ul onClick={hideMenu}>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/projects"}>Projects</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          {showMenu ? <RiCloseLine size={30} /> : <ImMenu size={28} />}
        </div>
      </div>
    </header>
  );
};
