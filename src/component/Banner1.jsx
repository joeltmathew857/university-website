import React from "react";

export default function Banner1() {
  return (
    <div className="bg-teal-500	w-full py-8">
      <div className="max-w-prose mx-auto">
        <div className="text-2xl font-bold md:text-4xl ">Code with us</div>
        <h2 className=" text-white md:text-6xl font-bold text-3xl md:pt-10 ">
          improve your skill
        </h2>

        <div className="text-2xl font-bold italic md:pt-16 md:text-4xl">
          Learn it from us
          <div
            strings={["web development", "digital market", "ethical hack"]}
            typespeed={100}
            loop={true}
            backspeed={120}
          />
        </div>
      </div>
    </div>
  );
}
