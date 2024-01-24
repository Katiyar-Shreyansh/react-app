import Header from "./Header"
import React from "react"
const styleObject={
  border:"2px solid green",
  backgroundColor:"black",
  color:"white",
  padding:"1rem",
}

function App(){
  return(
  <div style={styleObject}>
    <h1>Hello from App</h1>
    {/* <h2>maths : {4 + +'5'}</h2> */}
    <Header/>
  </div>
  )
}
export default App
