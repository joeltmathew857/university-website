import React from "react";
import Laptop from "../ass/imga/istockphoto.jpeg";
import cafe from "../ass/imga/cafe-logo.png"

export default function Experts() {
  return (
    <div className="max-w-1[1240px] mx-auto border border-black  grid grid-cols-3">
      <div className="col-span-1 flex">
        <img src={Laptop} />
        <img src={cafe}/>
        <img src={cafe}/>
      </div>
    </div>
  );
}
