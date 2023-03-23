import React, { useRef, useState } from "react";
import "./modal-window.scss";
import Controller from "../Cotroller";
import {useDispatch} from "react-redux";
import {addTaskAC} from "../../../actions/action";

const ModalWindow = () => {
  const [hide, setHide] = useState<Boolean>(false);
  const dispatch = useDispatch()
  const taskNameRef = useRef<HTMLInputElement>(null);
  const taskDescriptionRef = useRef<HTMLTextAreaElement>(null);

  const hideModalWindow = (): void => {
    setHide(!hide);
  };

  const newTask = taskNameRef.current?.value
  const newDescriptionTask = taskDescriptionRef.current?.value

  console.log(newTask, newDescriptionTask)

  const addTask = () => {
    dispatch(addTaskAC({newTask, newDescriptionTask}))
    setHide(!hide);
  }


  return (
    <div>
      <Controller
        text="Add task"
        className="addTaskBtn"
        onClick={hideModalWindow}
      />
      {hide && (
        <div className="modal-wrapper">
          <div className="modal-window-container">
            <span className="modal-window-container__task-name">
              Task name:
            </span>
            <input
              ref={taskNameRef}
              type="text"
              className="modal-window-container__title"
            ></input>
            <span className="modal-window-container__task-description">
              Task description:
            </span>
            <textarea
              ref={taskDescriptionRef}
              className="modal-window-container__description"
              placeholder="description"
            />
            <div className="modal-window-container__btn">
              <Controller
                text="Save"
                className="modalBtn"
                onClick={addTask}
              />
              <Controller
                text="Close"
                className="modalBtn"
                onClick={hideModalWindow}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalWindow;
