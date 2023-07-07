import { useForm } from "../../hooks/useForm";
import PropTypes from "prop-types";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!description || description.length <= 1) return;
    onNewTodo({
      id: new Date().getTime() + Math.floor(Math.random() * 99),
      done: false,
      description,
    });
    onResetForm();
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        value={description}
        name="description"
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
};

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};
