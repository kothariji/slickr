import React, { useState } from "react";

import { Rnd } from "react-rnd"; // rnd library

const Component = ({ children, width, x, y }) => {
  const [isEditing, setIsEditing] = useState(false); // checking is dragging or reszing

  // adding border and effect when editing
  const onDragStart = () => {
    setIsEditing(true);
  };
  const onDragStop = () => {
    setIsEditing(false);
  };

  // default styles
  const style = {
    position: "absolute",
    top: 0,
    left: 0,
  };

  return (
    <Rnd
      style={style}
      default={{
        x: x || 0,
        y: y || 0,
        width: width || 320,
      }}
      onDragStart={onDragStart}
      onDragStop={onDragStop}
      onResizeStart={onDragStart}
      onResizeStop={onDragStop}
      className="resizerComp"
    >
      {children}
      <div
        className={`w-full h-full absolute top-0 left-0 border-[3px] border-[#4286f4] resizer ${
          !isEditing && "hidden"
        }`}
      >
        <div className="absolute top-[-7.5px] left-[-7.5px] rounded-full h-[15px] w-[15px] bg-white border-[3px] border-[#4286f4] overflow-visible"></div>
        <div className="absolute top-[-7.5px] right-[-7.5px] rounded-full h-[15px] w-[15px] bg-white border-[3px] border-[#4286f4]"></div>
        <div className="absolute bottom-[-7.5px] left-[-7.5px] rounded-full h-[15px] w-[15px] bg-white border-[3px] border-[#4286f4]"></div>
        <div className="absolute bottom-[-7.5px] right-[-7.5px] rounded-full h-[15px] w-[15px] bg-white border-[3px] border-[#4286f4]"></div>
      </div>
    </Rnd>
  );
};

export default Component;
