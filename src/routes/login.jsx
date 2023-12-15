import AppLogo from "../assets/images/logo.svg?react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <div className="base-container">
      <AppLogo />
      <form className="register-form" id="login-form">
        <input type="email" name="email" placeholder="mail@example.com" />
        <input type="password" name="password" placeholder="Password" />
        <div className="password-info">
          <div>
            <input type="checkbox" name="remember-me" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <a>forgot password?</a>
        </div>

        <button type="submit">Login</button>
      </form>
      <p className="register-with">or login with:</p>
      <ul className="register-social-wrapper">
        <li>
          <button>
            <FontAwesomeIcon icon={faFacebook} />
          </button>
        </li>
        <li>
          <button>
            <FontAwesomeIcon icon={faGoogle} />
          </button>
        </li>
        <li>
          <button>
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Login;
