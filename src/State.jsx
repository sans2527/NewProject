import { useState } from "react"
function State() {
    const [data, setData] = useState(1)
    function updateData() {
        setData(data*2)
    }
    console.warn("............");
    return (


        <div style={{backgroundColor:"yellow"}}>
            <h1>{data}</h1>
            <button onClick={updateData}> updateData </button>
        </div>
    )
}

export default State;


