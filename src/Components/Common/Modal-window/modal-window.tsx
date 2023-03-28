import React from 'react';
import Controller from "../Cotroller";
import './modal-window.scss'

type ModalPropsType = {
    onChangeTaskName: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onChangeTasDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    addTask: () => void,
    hideModalWindow: () => void,
    valueTaskName?: string,
    valueTaskDescription?: string,
}

const ModalWindow = ({
                         onChangeTaskName,
                         onChangeTasDescription,
                         addTask,
                         hideModalWindow,
                         valueTaskName,
                         valueTaskDescription
                     }: ModalPropsType) => {

    return (
        <div className="modal-wrapper">
            <div className="modal-window-container">
            <span className="modal-window-container__task-name">
              Task name:
            </span>
                <input
                    value={valueTaskName}
                    onChange={onChangeTaskName}
                    type="text"
                    className="modal-window-container__title"
                ></input>
                <span className="modal-window-container__task-description">
              Task description:
            </span>
                <textarea
                    value={valueTaskDescription}
                    onChange={onChangeTasDescription}
                    className="modal-window-container__description"
                    placeholder="description"
                />
                <div className="modal-window-container__btn">
                    <Controller text="Save" className="modalBtn" onClick={addTask}/>
                    <Controller
                        text="Close"
                        className="modalBtn"
                        onClick={hideModalWindow}
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;