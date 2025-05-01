import React from "react";
import { TodoCounter } from "../TodoCounter/Index";
import { TodoHeader } from "../TodoHeader/index.js";
import { TodoItem } from "../TodoItem/Index";
import { TodoList } from "../TodoList/Index";
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
    <div className="AppContainer">
      <TodoCounter />

      <TodoHeader setOpenModal={setOpenModal} />

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

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </div>
  );
}

export { AppUI };
