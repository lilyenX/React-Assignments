import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TaskInputProps = {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSave: () => void;
  isEditing: boolean;
};

const TaskInput = ({
  inputValue,
  onInputChange,
  onSave,
  isEditing,
}: TaskInputProps) => {
  return (
    <div className="input-section">
      <input
        value={inputValue}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
        type="text"
        placeholder="What needs to be done?"
        className="main-input"
      />
      <button className="add-btn" onClick={onSave}>
        {isEditing ? "Edit" : <FontAwesomeIcon icon={faPlus} />}
      </button>
    </div>
  );
};

export default TaskInput;
