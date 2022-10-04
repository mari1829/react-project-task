import React from "react";
// import '../my-src/Myapp.css'
import Myapp from "../my-src/Myapp";

function Second() {
  return (
    <div className="totalbox">
      {
        [0,1,2].map(()=>
        {
            return <Myapp/>
        })
      }
    </div>
  )
}
export default Second;
