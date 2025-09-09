import React from "react";
import PageTitle from "../components/PageTitle";
import Sidebar from "../components/category/Sidebar";
import CategoryHeader from "../components/category/CategoryHeader";
import CategoryProductList from "../components/category/CategoryProductList";
import CategoryPagination from "../components/category/CategoryPagination";

const Category = () => {
  return (
    <main className="main">
      <PageTitle pageTitle={"Category"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 sidebar">
            <Sidebar />
          </div>

          <div className="col-lg-8">
            <CategoryHeader />
            <CategoryProductList />
            <CategoryPagination />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Category;
