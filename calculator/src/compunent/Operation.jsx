import { useState } from "react"
import '../style/operation.css'
import Result from '../compunent/Result.jsx'
function Operations ()
{
    const[operator,setOperator] = useState('');
    
     
      function click(e)
      {
        setOperator(operator+e.target.value)
      }
       function result()
       {
        console.log(operator)
        // setOperator(eval(operator))
       }

    return(
        <div className="div">
        <Result valueOperator={operator}  />
        <button className="button" onClick={click} value="+">+</button>
        <button className="button" onClick={click} value="-">-</button>
        <div>
        <button className="button" onClick={click} value="*">*</button>
        <button className="button" onClick={click} value="/">/</button>
        <button className="button" onClick={click} value="0">0</button>
        <button className="button" onClick={click} value="1">1</button>
        </div>
        <div>
        <button className="button" onClick={click} value="2">2</button>
        <button className="button" onClick={click} value="3">3</button>
        <button className="button" onClick={click} value="4">4</button>
        <button className="button" onClick={click} value="5">5</button>
        </div>
        <div>
        <button className="button" onClick={click} value="6">6</button>
        <button className="button" onClick={click} value="7">7</button>
        <button className="button" onClick={click} value="8">8</button>
        <button className="button" onClick={click} value="9">9</button>
        </div>
        <div>
          <button className="but" onClick={result} value="=">=</button>
        </div>
        </div>
    )
    
}

export default Operations