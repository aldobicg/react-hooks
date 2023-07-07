import PropTypes from "prop-types";

export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {
  return (
    <li className=" list-group-item d-flex justify-content-between ">
      <span
        role="button"
        onClick={() => onToggleTodo(todo)}
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
      >
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onRemoveTodo(todo)}>
        Borrar
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};
