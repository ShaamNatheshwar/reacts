import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import userEvent from "@testing-library/user-event";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase.util";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

 
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <div>
            <CrwnLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
