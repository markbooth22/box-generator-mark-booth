import React, {useState} from "react";

const ColorForm = (props) => {
  const { colors, setColor } = props;
  const [newColor, setNewColor] = useState("");

  const addColor = (e) => {
    e.preventDefault();
    setColor([ ...colors, newColor ]);
    setNewColor("");
}



  return (
    <form onSubmit= { addColor }>
      <div className="form-group">
        <label>Color</label>
        <input 
        type="text" 
        className="form-control" 
        onChange={(e) => setNewColor(e.target.value)} 
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default ColorForm;