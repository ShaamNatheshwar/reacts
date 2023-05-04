import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
// import "./navigation.styles.scss";
import userEvent from "@testing-library/user-event";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase.util";
import ShopIcon from "../../components/shop-icon/shop-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation.styles";
import { CartContext } from "../../context/cart.context";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to='shop'>SHOP</NavLink>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <NavLink to='auth'>SIGN IN</NavLink>
          )}
          <ShopIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
