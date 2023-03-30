import React, { useState } from "react";

function ButtonGroup({onClick}) {
    const [clickedId, setClickedId] = useState(-1);

    const handleClick = (event, id) => {
        setClickedId(id);
        onClick(event);
      };

  return (
    <div className="ButtonGroup">
            <button 
                key="0" 
                name="Date" 
                className={0 === clickedId ? "button active" : "button"}
                onClick={(event) => handleClick(event, 0)}>
                    Date</button>
            <button 
                key="1" 
                name="Modality" 
                className={1 === clickedId ? "button active" : "button"}
                onClick={(event) => handleClick(event, 1)}>
                    Modality</button>
    </div>
  );
}

export default ButtonGroup;
