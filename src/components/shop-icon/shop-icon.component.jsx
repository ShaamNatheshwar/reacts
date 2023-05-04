import {CartIconContainer, ShoppingIcon, ItemCount} from "./shop-icon.styles";

import { useContext } from "react";
import { CartContext} from "../../context/cart.context";

const ShopIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  
    return (
      <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon />
        <ItemCount>{cartCount}</ItemCount>
      </CartIconContainer>
    );
  };

export default ShopIcon