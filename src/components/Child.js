import React from 'react'
const Child = ({setSelectedValueFn,value,setClassName})=>{

    return(
        <div className={setClassName}>
            <h2>Child Component</h2>
            <button onClick={()=>setSelectedValueFn(value)}>{value}</button>
        </div>
    )
}
export default Child;
