import { Outlet, useNavigate } from "react-router-dom";
import { useNavbarStore } from "../store/store";
import AppLogo from "../components/AppLogo";

const Root = () => {
  const { hideLoginBtn, hideRegisterBtn } = useNavbarStore();
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
            hidden={hideLoginBtn}
            onClick={() => {
              navigate("/login");
            }}
          >
            login
          </button>
          <button
            hidden={hideRegisterBtn}
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
