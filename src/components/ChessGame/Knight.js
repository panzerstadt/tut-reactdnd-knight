import React from "react";
import { ItemTypes } from "./Constants";
import { DragSource } from "react-dnd";

// drag source
const knightSource = {
  beginDrag(props) {
    return {
      objId: props.id
    };
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

const Knight = ({ connectDragSource, isDragging }) => {
  return connectDragSource(
    <span
      style={{
        fontSize: isDragging ? "3rem" : "2rem",
        opacity: isDragging ? 0.5 : 1,
        cursor: "pointer"
      }}
    >
      ♘
    </span>
  );
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
