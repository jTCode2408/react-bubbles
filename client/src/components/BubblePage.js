import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

axiosWithAuth()
.get('http://localhost:5000/api/colors')
.then (res =>{
  console.log('COLORS res', res)
  setColorList(res.data)
})
.catch(err=> {
  console.log(err)

})

  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (

    <>
        <h1>WELCOME TO BUBBLE FEST!</h1>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
