import { useState,useEffect } from "react";
import "./w.css";
const Change=()=>{
    const [color,setColor]=useState("");
    useEffect(()=>{
    document.getElementById("colorchange").style.backgroundColor=color;})
    return (
      <>
      <div id = "first"><h1>Dropdown</h1>
        <select id="dropdown" onChange={(color_current) => setColor(color_current.target.value)} placeholder="Select Color">
          <option value="none" >Select Color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="black">Black</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="peach">peach</option>
          <option value="aquamarine">Aqua Marine</option>
        </select>
</div>
<div id="colorchange"> &nbsp;</div>
</>
    );
 }
 export default Change;