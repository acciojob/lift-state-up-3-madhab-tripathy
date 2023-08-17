import React, { useState } from "react";
import Child from "./Child"

const Parent = ()=>{
    const [selectedOption,setSelectedOption] = useState("");
    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child  setClassName="child ch-1"
                setSelectedValueFn={setSelectedOption}
                value="Option 1"
                />
            <Child setClassName="child ch-2"
                setSelectedValueFn={setSelectedOption}
                value="Option 2"
            />
            {
                selectedOption && <p>Selected Option: {selectedOption}</p>
            }
        </div>
    )
}
export default Parent;