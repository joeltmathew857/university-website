import React from "react";
import { Header } from "./component/Header";
import Banner from "./component/Banner1";
import Experts from "./component/Experts";
import { HelloBox } from "./component/Experts";
import MyButton from "./component/MyButton";
import {cousore} from "./component/cousore";
import {slides} from "./data/CousorDatafile.json"

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Experts />
      <MyButton />
      <HelloBox />
      <cousore />
    </>
  );
}

export default App;
