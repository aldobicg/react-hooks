import { TodoAdd, TodoList } from "./components";
import { useTodos } from "./hooks";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp {todosCount}, <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-12 col-md-5 order-md-last">
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
        <div className="col-12 col-md-7 mt-4 mt-md-0">
          {/* TODO: TodoList */}
          <TodoList
            todos={todos}
            onRemoveTodo={handleRemoveTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
      </div>
    </>
  );
};
