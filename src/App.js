import React from "react";
import { Header } from "./component/Header";
import Banner from "./component/Banner1";
import Experts from "./component/Experts";
import { HelloBox } from "./component/Experts";
import MyButton from "./component/MyButton";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Experts />
      <MyButton />
      <HelloBox />
    </>
  );
}

export default App;
