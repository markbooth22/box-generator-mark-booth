import React from "react";
import Result from "./Result";

const Results = (props) => {
  const { colors } = props;


  return (
    <div>
      { colors.map((color, index) =>  (

        <Result  color={color} key={index}/>

        ))}
    </div>
  );
};

export default Results;