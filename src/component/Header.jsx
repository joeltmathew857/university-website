import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6">
      <div className="max-w-5xl flex justify-between py-10 place-items-center">
        <div className="font-bold text-2xl font-mono text-yellow-50">
          BEEWORLS
        </div>
        {toggle ? (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-black text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-black text-2xl md:hidden block"
          />
        )}
        <ul
          className={`text-base font-serif w-full h-48 duration-500 text-white fixed bg-black  mt-64 md:flex
        ${toggle ? `left-[0]` : "left-[-100%]"}
        `}
        >
          <li className="p-3">Home</li>
          <li className="p-3">About</li>
          <li className="p-3">Contact</li>
          <li className="p-3">Reference</li>
        </ul>
      </div>
    </div>
  );
}
