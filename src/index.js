import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

//Ohw8NkrRl8ErnbZtg9KindN4wWeTfSfs
//ASbXrKV_ysUGCKtQ5ToyMQVXIY17uoYdRF3EOY65YfkqtfhhTnwq3v1gjelBcO4R
//dev-ozg7xao4mbp4sojn.us.auth0.com
root.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>
);
