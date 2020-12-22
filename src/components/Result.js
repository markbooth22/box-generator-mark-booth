import React from "react";

const Result = (props) => {
  const boxStyle ={
    background: props.color,
    width: "300px",
    height: "300px",
    display: "inline-block"

  }
  return(
    <div style={boxStyle}></div>
  )
}


export default Result