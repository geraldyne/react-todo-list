// src/TodoHeader/index.js
import React from "react";
import { TodoSearch } from "../TodoSearch/Index";
import { CreateTodoButton } from "../CreateTodoButton/Index";
import "./TodoHeader.css";

function TodoHeader({ setOpenModal }) {
  return (
    <div className="TodoHeader">
      <TodoSearch />
      <CreateTodoButton setOpenModal={setOpenModal} />
    </div>
  );
}

export { TodoHeader };
