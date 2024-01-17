import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import ItemDetails from "./pages/ItemDetails";
import { useState, useEffect } from "react";
import { products } from "./data";

/*
1. Show all items - done!!!
2. if you click on product card, link to product details page - done!!!
3. if you click on add to cart button, cart item number is updated - done!!!
4. if you click on removed from the cart item number is updated
5. show cart items
*/

function App() {
  const [cartItemNum, setCartItemNum] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  const handleAdd = (id) => {
    setCartItem(() => cartItem.push(products[id]));
    setCartItemNum(cartItem.length);
    console.log(cartItem);
  };

  const handleRemove = () => {
    setCartItemNum((num) => num - 1);
  };

  return (
    <div className="App">
      <Navbar cartItemNum={cartItemNum} handleAdd={handleAdd} />
      <Routes>
        <Route
          path="/"
          element={
            <AllProducts
              cartItemNum={cartItemNum}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ItemDetails
              cartItemNum={cartItemNum}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
