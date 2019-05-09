// http://react-dnd.github.io/react-dnd/docs/tutorial#adding-drag-and-drop-interaction

let knightPosition = [1, 7];
let observer = null;

const emitChange = () => {
  observer(knightPosition);
};

export const observe = o => {
  if (observer) {
    throw new Error("Multiple observers not implented");
    // if observer has already been assigned throw an error
    // allows only one observer
  }

  // tie the observer variable to the thing it receives
  // in this case a function
  observer = o;

  // call function that gives the observer the current result (knightPosition)
  emitChange();
};

export const moveKnight = (toX, toY) => {
  knightPosition = [toX, toY]; // set new pos
  emitChange(); // tell the observer that something has happened and give it news
};

export const canMoveKnight = (toX, toY) => {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  );
};
