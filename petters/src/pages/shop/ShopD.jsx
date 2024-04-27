import React, { useState } from "react";
import { DPRODUCTS } from "./Dog-products.js";
import { Product } from "./Product";
//import BudgetFilter from "../../budget.js"; // Assuming BudgetFilter component exists
import "./shop.css";
export const ShopD = () => {
  // State for filtered products based on budget
  const [filteredProducts, setFilteredProducts] = useState(DPRODUCTS);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>DOGS</h1>
      </div>
     <div className="products">
        {/* Render products based on filtered products */}
        {filteredProducts.map((product) => (
         <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

/*<BudgetFilter products={DPRODUCTS} setFilteredProducts={setFilteredProducts} />*/
