import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faEdit,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import TaskInput from "./components/TaskInput";
import ToDoItem from "./components/ToDoItem";
library.add(faTrash, faEdit, faSun, faMoon);

type ToDo = {
  id: number;
  text: string;
  completed: boolean;
};
const App = () => {
  const [isDark, setDark] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [todos, setToDos] = useState<ToDo[]>([]);

  const [editid, setEditId] = useState<number | null>(null);

  const [filter,setFilter]=useState<"all"| "pending" |"completed">('all')

  const toggleComplete = (id: number) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  const toggleDelete = (id: number) => {
    if (editid) {
      setInputValue("");
    }
    setToDos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (todo: ToDo) => {
    setInputValue(todo.text);
    setEditId(todo.id);
  };
  const handleSave = () => {
    if (inputValue.trim() === "") return;

    if (editid !== null) {
      setToDos(
        todos.map((todo) =>
          todo.id === editid ? { ...todo, text: inputValue } : todo,
        ),
      );
      setEditId(null);
    } else {
      setToDos([
        ...todos,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
    }

    setInputValue("");
  };

   const filteredToDos=todos.filter((todo)=>{
    if(filter==="pending") return !todo.completed
    if(filter === 'completed') return todo.completed
    return true
   })
   
  return (
    <>
      {/* section of inserting */}
      <div className={`app-container ${isDark ? "app-dark" : ""}`}>
        <div className="top-bar">
          {/* left corner */}
          <div className="left-section">
            <button
              className="toggle-btn"
              onClick={() => {
                setDark(!isDark);
              }}
            >
              <FontAwesomeIcon icon={isDark ? "sun" : "moon"} />
              {/* <span>{isDark ? "Light Mode" : "Dark Mode"}</span> */}
            </button>
          </div>
          {/* text*/}
          <div className="center-section">
            <h1>Website todo</h1>
          </div>
          <div className="right-section"></div>
          {/* input */}
          <TaskInput
            inputValue={inputValue}
            onInputChange={setInputValue}
            onSave={handleSave}
            isEditing={editid !== null}
          />
        </div>

        <div className="todo-section">
          <div className="filter-section">
              <button
              onClick={()=> setFilter('all')}
              >All</button>
              <button
              onClick={()=> setFilter('pending')}
              >Pending</button>
              <button 
              onClick={()=>setFilter('completed')}
              >Completed</button>
          </div>
          {filteredToDos.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={toggleComplete}
              onEdit={startEditing}
              onDelete={toggleDelete}
            />
          ))}
        </div>
      </div>
      {/* todo-list section */}
      <div className="list-section"></div>
    </>
  );
};

export default App;
