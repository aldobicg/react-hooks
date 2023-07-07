import { useEffect, useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";

export const useTodos = () => {
  const initialState = [
    // {
    //   id: new Date().getTime(),
    //   description: "Recolectar piedra del alma",
    //   done: false,
    // },
  ];
  const initializer = () => JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, dispatch] = useReducer(todoReducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "@todo/add",
      payload: todo,
    };
    dispatch(action);
  };

  const handleRemoveTodo = (todo) => {
    const action = {
      type: "@todo/remove",
      payload: todo,
    };
    dispatch(action);
  };

  const handleToggleTodo = (todo) => {
    const action = {
      type: "@todo/toggle",
      payload: todo,
    };
    dispatch(action);
  };

  const pendingTodosCount = todos.reduce(
    (count, todo) => (!todo.done ? count + 1 : count),
    0
  );

  const todosCount = todos.length;

  return {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
    pendingTodosCount,
    todosCount,
  };
};
