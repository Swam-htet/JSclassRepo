// use state import
import {useState} from "react";

export default function Counter() {
    // get and set
    let [count,setCount] = useState(0);
    // increase event handler function
    let increment = () => {
        console.log("Increment");

        // set difference reference
        setCount(count+1);
    }
    return (<div>
        <h1 className={"text-danger"}>Counter {count}</h1>
        <button className={"btn btn-outline-danger"}
                type={"button"}
                // event binding
                onClick={increment}>
            +
        </button>
    </div>)
}