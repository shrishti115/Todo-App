import Header from "./Header";
import "./style.css";
import { useEffect, useState } from "react";
import Task from "./Task";
import { nanoid } from "nanoid";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [todo, setTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function CheckHandler(e) {
    const { value } = e.target;
    setTodo(value);
  }

  function addList() {
    if (todo === "") {
      return;
    }
    setTodos((prev) => {
      setTodo("");
      return [...prev, { note: "", task: todo, index: nanoid(), edit: false }];
    });
  }
  function editTask(index) {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.index === index) {
          return { ...todo, edit: !todo.edit };
        }
        return todo;
      });
    });
  }

  function setchangeValue(index, value, note) {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.index === index) {
          return { ...todo, edit: !todo.edit, task: value, note: note };
        }
        return todo;
      });
    });
  }

  function deleteTask(index) {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.index !== index;
      });
    });
  }

  const list = todos.map((td) => {
    return (
      <Task
        key={td.index}
        index={td.index}
        todo={td.task}
        onDelete={deleteTask}
        onEdit={editTask}
        setchangeValue={setchangeValue}
        edit={td.edit}
        note={td.note}
      />
    );
  });

  return (
    <>
      <Header />
      <div className="container">
        <div className="todo__input">
          <input
            className="todo-input"
            type="text"
            placeholder="Enter your task here"
            value={todo}
            onChange={CheckHandler}
          />
          <button className="add" onClick={addList}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              id="add-new"
            >
              <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"></path>
            </svg>
          </button>
        </div>
        <div className="todo__list">{list}</div>
      </div>
    </>
  );
}

export default App;
