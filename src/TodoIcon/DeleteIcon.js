import React from "react";
import { TodoIcon } from "./Index";

function DeleteIcon({ onDelete }) {
  return <TodoIcon type="delete" color="transparent" onClick={onDelete} />;
}

export { DeleteIcon };
