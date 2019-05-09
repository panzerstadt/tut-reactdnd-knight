import React from "react";
import Square from "./Square";
import { DropTarget } from "react-dnd";

import { ItemTypes } from "./Constants";
import { moveKnight, canMoveKnight } from "./Game";

// drop target
// with a function that specifies what to do when the target is dropped
const squareTarget = {
  canDrop(props) {
    return canMoveKnight(props.x, props.y);
  },
  drop(props, monitor) {
    console.log(monitor.getItem());
    moveKnight(props.x, props.y);
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
};

const renderOverlay = color => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color
      }}
    />
  );
};

const BoardSquare = ({
  x,
  y,
  connectDropTarget,
  isOver,
  canDrop,
  onClick,
  children
}) => {
  const black = (x + y) % 2 === 1;
  return connectDropTarget(
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Square black={black} onClick={onClick}>
        {children}
      </Square>
      {isOver && !canDrop && renderOverlay("red")}
      {!isOver && canDrop && renderOverlay("yellow")}
      {isOver && canDrop && renderOverlay("green")}
    </div>
  );
};

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);
