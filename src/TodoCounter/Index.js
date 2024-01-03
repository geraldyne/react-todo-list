import React from "react";
import { TodoContext } from "../TodoContext/Index";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <h1>
      Has completado <span> {completedTodos}</span> de <span>{totalTodos}</span>{" "}
      TODOS
    </h1>
  );
}

export { TodoCounter };
