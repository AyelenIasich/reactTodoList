import React from "react";
import "./Container.css";

function Container({ children }) {
  return (
    <div className="bg-container container-fluid ">
        <div className="row">
          <div className="col-12 col-sm-11 col-md-8 col-lg-6 mx-auto ">
             {children}
          </div>
        </div>
    </div>
  );
}

export default Container;
