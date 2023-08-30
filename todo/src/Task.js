import { useState } from "react";

function Task(props) {
  const [chValue, setchValue] = useState(props.todo);
  function editFn(e) {
    const { value } = e.target;
    setchValue(value);
  }

  const [showTextarea, setShowTextarea] = useState(false);
  const [inputValue, setInputValue] = useState(props.note);

  function showTextareaHandler() {
    setShowTextarea((prev) => !prev);
  }

  return (
    <>
      <div className="todo__list__item">
        <div className="sub__item">
          <input
            type="text"
            className="text"
            onChange={editFn}
            value={chValue}
            disabled={!props.edit}
          />
          {showTextarea && (
            <textarea
              placeholder="Enter your note here"
              className="textarea"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></textarea>
          )}
        </div>
        <button
          className="delete"
          onClick={() => {
            props.onDelete(props.index);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="trash-alt"
            width="35"
            height="35"
          >
            <path
              fill="rgb(0, 0, 0)"
              d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
            ></path>
          </svg>
        </button>
        {props.edit ? (
          <button
            // if (showTextarea && inputValue !== "") {
            //   props.addNote(props.index, inputValue);
            // }
            className="edit"
            onClick={() => {
              props.setchangeValue(props.index, chValue, inputValue);
              setShowTextarea(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              id="save"
            >
              <path
                fill="rgb(65, 183, 140)"
                d="M18 22a1 1 0 0 1-.5-.134L12 18.694l-5.5 3.172A1 1 0 0 1 5 21V5a3.003 3.003 0 0 1 3-3h8a3.003 3.003 0 0 1 3 3v16a1 1 0 0 1-1 1Z"
              ></path>
            </svg>
          </button>
        ) : (
          <button
            className="edit"
            onClick={() => {
              props.onEdit(props.index);
              setShowTextarea(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="25"
              height="25"
              id="edit"
            >
              <path
                fill="#6563FF"
                d="M26.71002,0.94c-0.59003-0.59003-1.53003-0.59003-2.12,0L13.20001,12.32996c-0.17999,0.17004-0.29999,0.39001-0.38,0.63l-1.85999,6.21002c-0.16003,0.53003-0.01001,1.09998,0.38,1.48999c0.27997,0.29004,0.66998,0.44,1.06,0.44c0.13995,0,0.28998-0.02002,0.42999-0.06l6.20996-1.85999c0.24005-0.08002,0.46002-0.20001,0.63-0.38L31.06,7.40997C31.34003,7.13,31.5,6.75,31.5,6.34998c0-0.39996-0.15997-0.77997-0.44-1.06L26.71002,0.94z"
              ></path>
              <path d="M30,14.5c-0.82861,0-1.5,0.67188-1.5,1.5v10c0,1.37891-1.12158,2.5-2.5,2.5H6c-1.37842,0-2.5-1.12109-2.5-2.5V6c0-1.37891,1.12158-2.5,2.5-2.5h10c0.82861,0,1.5-0.67188,1.5-1.5S16.82861,0.5,16,0.5H6C2.96729,0.5,0.5,2.96777,0.5,6v20c0,3.03223,2.46729,5.5,5.5,5.5h20c3.03271,0,5.5-2.46777,5.5-5.5V16C31.5,15.17188,30.82861,14.5,30,14.5z"></path>
            </svg>
          </button>
        )}

        <button onClick={showTextareaHandler} className="note">
          {!showTextarea ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="angle-down"
              width="40"
              height="40"
            >
              <path
                fill="rgb(0, 0, 0)"
                d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="angle-up"
              width="40"
              height="40"
            >
              <path
                fill="rgb(0, 0, 0)"
                d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </>
  );
}

export default Task;
