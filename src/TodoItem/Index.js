import "./TodoItem.css";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="todo-item">
      <div className="todo-item-left">
        <input
          type="checkbox"
          checked={completed}
          onChange={onComplete}
          className="todo-item-checkbox"
        />
        <p
          className={completed ? "todo-item-text completed" : "todo-item-text"}
        >
          {text}
        </p>
      </div>

      <DeleteIcon className="todo-delete-icon" onDelete={onDelete} />
    </li>
  );
}

export { TodoItem };
