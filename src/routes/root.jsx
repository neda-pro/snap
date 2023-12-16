import { Outlet, useNavigate } from "react-router-dom";
import { useNavbarStore } from "../store/store";
import AppLogo from "../components/AppLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

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
      <header className="mobile-header">
        <AppLogo />
        <FontAwesomeIcon className="bars-icon" icon={faBars} />
      </header>
      <div className="modal">
        <div>
          <FontAwesomeIcon className="menu-close" icon={faClose} />
          <ul>
            <li>feature</li>
            <li>company</li>
            <li>careers</li>
            <li>about</li>
          </ul>
          <div className="mobile-menu-btn-wrapper">
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
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
