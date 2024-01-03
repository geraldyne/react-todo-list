import { CompleteIcon } from "../TodoIcon/CompleteIcon.js";
import { DeleteIcon } from "../TodoIcon/DeleteIcon.js";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li>
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={`${props.completed && "task-completed"}`}>{props.text}</p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };
