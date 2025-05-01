import React from "react";
import { ReactComponent as SearchIcon } from "./search.svg";
import { TodoContext } from "../TodoContext/Index";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <div className="todo-search-container">
      <SearchIcon className="todo-search-icon" />
      <input
        className="todo-search-input"
        placeholder="Buscar tarea"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}

export { TodoSearch };
