import { Outlet } from "react-router-dom";
import AppLogo from "../assets/images/logo.svg?react";

const Root = () => {
  return (
    <div className="container">
      <header className="header">
        <nav className="header-left">
          <AppLogo />
          <ul>
            <li>feature</li>
            <li>company</li>
            <li>careers</li>
            <li>about</li>
          </ul>
        </nav>
        <div className="header-right">
          <button>login</button>
          <button>register</button>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Root;
