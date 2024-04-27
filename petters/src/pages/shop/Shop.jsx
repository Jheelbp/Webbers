import React, { useState } from "react";
import { RPRODUCTS } from "./Requirement-products.js";
import { Product } from "./Product";
//import BudgetFilter from "../../budget.js"; // Assuming BudgetFilter component exists
import "./shop.css";
export const Shop = () => {
  // State for filtered products based on budget
  const [filteredProducts, setFilteredProducts] = useState(RPRODUCTS);

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
