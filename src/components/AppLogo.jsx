import { Link } from "react-router-dom";
import IconLogo from "../assets/images/logo.svg?react";

const AppLogo = () => {
  return (
    <>
      <Link to={"/intro"}>
        <IconLogo />
      </Link>
    </>
  );
};

export default AppLogo;
