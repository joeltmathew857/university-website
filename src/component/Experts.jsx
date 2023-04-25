import React from "react";
import Laptop from "../ass/imga/istockphoto.jpeg";
import cafe from "../ass/imga/cafe-logo.png"

export default function Experts() {
  return (
    <div className="max-w-1[1240px] mx-auto border border-black  grid grid-cols-3">
      <div className="col-span-1 flex w-200">
        <img src={Laptop} />
        <img src={cafe}/>
        <img src="https://www.bugatti.com/fileadmin/_processed_/sei/p54/se-image-4799f9106491ebb58ca3351f6df5c44a.jpg" alt="My Image" />

      </div>
    </div>
  );
}
