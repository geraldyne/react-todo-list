import React from "react";
import { CreateTodoButton } from "../CreateTodoButton/Index";
import { TodoCounter } from "../TodoCounter/Index";
import { TodoItem } from "../TodoItem/Index";
import { TodoList } from "../TodoList/Index";
import { TodoSearch } from "../TodoSearch/Index";
import { TodosLoading } from "../TodosLoading/Index";
import { TodosError } from "../TodosError/Index.js";
import { EmptyTodos } from "../EmptyTodos/Index";
import { TodoContext } from "../TodoContext/Index.js";
import { Modal } from "../Modal/Index.js";
import { TodoForm } from "../TodoForm/Index.js";

function AppUI() {
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
