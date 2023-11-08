import { useState } from "react";
import "./Nav.css";

function Nav() {
  const [open, setOpen] = useState(false);

  const setMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img className="icon-logo" src="/images/logo.svg" alt="" />

        <button className="open-menu" onClick={setMenu}>
          <img src="/images/icon-menu.svg" alt="" />
        </button>
      </div>

      <div className={open ? "open" : "close"}>
        <div className={`nav-menu ${!open ? "close-animation" : ""}`}>
          <button className="close-menu" onClick={setMenu}>
            <img src="/images/icon-menu-close.svg" alt="" />
          </button>
          <div className="nav-links">
            <a href="" className="nav-item">
              Home
            </a>
            <a href="" className="nav-item">
              New
            </a>
            <a href="" className="nav-item">
              Popular
            </a>
            <a href="" className="nav-item">
              Trending
            </a>
            <a href="" className="nav-item">
              Categories
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Nav };
