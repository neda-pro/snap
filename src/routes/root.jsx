import { Outlet, useNavigate } from "react-router-dom";
import AppLogo from "../assets/images/logo.svg?react";

const Root = () => {
  const navigate = useNavigate();
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
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            login
          </button>
          <button
            onClick={() => {
              navigate("/register");
            }}
          >
            register
          </button>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Root;
