import { useState } from "react";
import Count from '../component/Count.jsx';
import '../style/button.css'
function Button()
{
    let[counter,setCounter]=useState(0);
   function add(){
       setCounter(++counter)
    }
    function minus(){
        {counter > 0 ?  setCounter(--counter): setCounter(0)}
     }
    return(
        <div>
        <Count count={counter}/>
        <div className="div">
        <button className="but" onClick={add}>+</button>
        <button className="but" onClick={minus}>-</button>
        </div>
        </div>
    )
}
export default Button;