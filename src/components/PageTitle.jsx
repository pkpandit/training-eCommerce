import React from "react";

const PageTitle = ({ pageTitle }) => {
  return (
    <div className="page-title light-background">
      <div className="container d-lg-flex justify-content-between align-items-center">
        <h1 className="mb-2 mb-lg-0">{pageTitle}</h1>
        {/*  <nav className="breadcrumbs">
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="current">About</li>
          </ol>
        </nav> */}
      </div>
    </div>
  );
};

export default PageTitle;
