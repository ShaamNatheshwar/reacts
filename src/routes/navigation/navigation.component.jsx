import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import userEvent from "@testing-library/user-event";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase.util";
import ShopIcon from "../../components/shop-icon/shop-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  const {isCartOpen} = useContext(CartContext)
 
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

          <ShopIcon />
        </div>
        {isCartOpen && <CartDropdown /> }
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
