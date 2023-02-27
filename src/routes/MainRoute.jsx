import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import Products from "../pages/Products";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";

function MainRoute({
  phones,
  addData,
  deleteData,
  onePhone,
  getOnePhone,
  editPhone,
}) {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="list"
          element={<Products phones={phones} deleteData={deleteData} />}
        />
        <Route path="add" element={<AddProduct addData={addData} />} />
        <Route
          path="edit/:id"
          element={
            <EditProduct
              onePhone={onePhone}
              getOnePhone={getOnePhone}
              editPhone={editPhone}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default MainRoute;
