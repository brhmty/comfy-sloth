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

//ASbXrKV_ysUGCKtQ5ToyMQVXIY17uoYdRF3EOY65YfkqtfhhTnwq3v1gjelBcO4R

root.render(
  <Auth0Provider
    domain="dev-ozg7xao4mbp4sojn.us.auth0.com"
    clientId="Ohw8NkrRl8ErnbZtg9KindN4wWeTfSfs"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    catchLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
