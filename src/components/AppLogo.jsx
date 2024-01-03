import { Link } from "react-router-dom";
import IconLogo from "../assets/images/logo.svg?react";
import { useNavbarStore } from "../store/store";

const AppLogo = () => {
  const { setIsHome } = useNavbarStore();
  return (
    <Link
      to={"/"}
      onClick={() => {
        setIsHome(true);
      }}
    >
      <IconLogo />
    </Link>
  );
};

export default AppLogo;
