import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import TouchBackend from "react-dnd-touch-backend";
import MultiBackend from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/lib/HTML5toTouch";

export default DragDropContext(MultiBackend(HTML5toTouch));
