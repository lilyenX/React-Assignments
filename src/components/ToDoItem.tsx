import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ToDo = {
  id: number;
  text: string;
  completed: boolean;
};

type ToDoItemProps = {
  todo: ToDo;
  onToggleComplete: (id: number) => void;
  onEdit: (todo: ToDo) => void;
  onDelete: (id: number) => void;
};

const ToDoItem = ({
  todo,
  onToggleComplete,
  onEdit,
  onDelete,
}: ToDoItemProps) => {
  return (
    <div className={`todo-list-part ${todo.completed ? "done" : ""}`}>
      <button
        className="circle-check"
        onClick={() => onToggleComplete(todo.id)}
      >
        <div className="inner-circle"></div>
      </button>
      <span className="todo-text">{todo.text}</span>
      <button className="edit-btn" onClick={() => onEdit(todo)}>
        <FontAwesomeIcon icon="edit" />
      </button>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        <FontAwesomeIcon icon="trash" />
      </button>
    </div>
  );
};

export default ToDoItem;
