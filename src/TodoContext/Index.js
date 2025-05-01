import React, { createContext, useState, useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTodo = useCallback(
    (text) => {
      const newTodos = todos.map((todo) =>
        todo.text === text ? { ...todo, completed: !todo.completed } : todo
      );
      saveTodos(newTodos);
    },
    [todos, saveTodos]
  );

  const deleteTodo = useCallback(
    (text) => {
      const newTodos = todos.filter((todo) => todo.text !== text);
      saveTodos(newTodos);
    },
    [todos, saveTodos]
  );

  const addTodo = useCallback(
    (text) => {
      saveTodos([...todos, { text, completed: false }]);
    },
    [todos, saveTodos]
  );

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
