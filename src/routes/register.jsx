import AppLogo from "../assets/images/logo.svg?react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import { useNavbarStore } from "../store/store";

const Register = () => {
  const { toggleRegisterBtn } = useNavbarStore();

  useEffect(() => {
    // hide register btn on mount
    toggleRegisterBtn();
    //show register btn when leaving the page(unmount)
    return () => {
      toggleRegisterBtn();
    };
  }, []);
  return (
    <div className="base-container">
      <AppLogo />
      <form className="register-form" id="login-form">
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
