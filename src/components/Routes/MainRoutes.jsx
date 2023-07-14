import React from "react";
import { Route, Routes } from "react-router-dom";

import Register from "../Auth/Register";
import Login from "../Auth/Login";
import RegisterSuccess from "../Auth/RegisterSuccess";
import EditProduct from "../Product/EditProduct";
import AddProduct from "../Product/AddProduct";
import ProductList from "../Product/ProductList";
import ProductDetails from "../Product/ProductDetails";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register-success" element={<RegisterSuccess />} />

      <Route path="/add" element={<AddProduct />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  );
};

export default MainRoutes;
