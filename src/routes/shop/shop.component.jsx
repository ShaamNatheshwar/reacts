import ProductCard from "../../components/product-card/product.component";
import { ProductsContext } from "../../context/product.context";
import SHOP_DATA from "../../shop-data.json";
import "./shop.styles.scss";
import { useContext } from "react";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
