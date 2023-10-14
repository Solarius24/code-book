import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={()=> setCount(count +1)}>Click</button>
            <h3>Count: {count}</h3>
        </div>
    )
}


const App = () => {
    return (
        <div>
            <h3>App Says Hi</h3>
            <i>Counter componenet will be rendered below...</i>
            <hr></hr>
            <Counter/>
        </div>
    )
}