import React from "react";
import Laptop from "../ass/imga/istockphoto.jpeg";
import cafe from "../ass/imga/cafe-logo.png"

export default function Experts() {
  return (
    <div className="max-w-1[1240px] mx-auto border border-black  grid grid-cols-3">
      <div className="col-span-1 flex w-200">
        <img src={Laptop} alt=" Illustration of a laptop" />
        <img src={cafe} alt="coffee mug"/>

      </div>
    </div>
  );
}

export const HelloBox = () => (
  <h1>Hello</h1>
)