import React from "react";
import { TodoContext } from "../TodoContext/Index";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <section>
      <h1>TO-DO List</h1>
      <span> {completedTodos}</span> of <span>{totalTodos}</span>{" "}
      <span> completed</span>
    </section>
  );
}

export { TodoCounter };
