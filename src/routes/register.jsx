import AppLogo from "../assets/images/logo.svg?react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Register = () => {
  return (
    <div className="base-container">
      <AppLogo />
      <form className="register-form">
        <input type="text" name="name" placeholder="John Doe" />
        <input type="email" name="email" placeholder="mail@example.com" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm password"
        />
        <button type="submit">Register</button>
      </form>
      <p className="register-with">or register with:</p>
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
      <p className="register-terms">
        By clicking on register you will accept our{" "}
        <a href="" rel="noopener noreferrer">
          terms of service
        </a>
      </p>
    </div>
  );
};

export default Register;