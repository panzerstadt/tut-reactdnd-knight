import React, { useState } from "react";
import withDnDContext from "./withDnDContext";

import Knight from "./Knight";
import BoardSquare from "./BoardSquare";
//import { moveKnight, canMoveKnight } from "./Game";

// const handleSquareClick = (toX, toY) =>
//   canMoveKnight(toX, toY) && moveKnight(toX, toY);

const Row = ({ rowIndex, size, knightPos }) => {
  const arr = Object.keys([...Array(size)]);

  const sqs = arr.map((v, colIndex) => {
    const renderKnight = (x, y, [knightX, knightY]) => {
      const isKnight = knightX === x && knightY === y;
      if (isKnight) return <Knight />;
    };

    return (
      <BoardSquare
        x={rowIndex}
        y={colIndex}
        key={`col-${colIndex}`}
        //onClick={() => handleSquareClick(rowIndex, colIndex)}
      >
        {renderKnight(rowIndex, colIndex, knightPos)}
        <small>{`${rowIndex}, ${colIndex}`}</small>
      </BoardSquare>
    );
  });

  return sqs;
};

const Board = ({ knightPos = [0, 0] }) => {
  const size = 8;
  const arr = Object.keys([...Array(size)]);
  const proportion = window.innerWidth / window.innerHeight;

  return (
    <div
      style={{
        height: proportion > 1 ? "90vh" : "90vw",
        width: proportion > 1 ? "90vh" : "90vw",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {arr.map((v, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          style={{ display: "flex", height: "100%", width: "100%" }}
        >
          <Row rowIndex={rowIndex} size={size} knightPos={knightPos} />
        </div>
      ))}
    </div>
  );
};

export default withDnDContext(Board);
