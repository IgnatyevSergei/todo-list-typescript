import React, {useState} from 'react';
import Controller from "../Common/Cotroller";
import ModalWindow from "../Common/Modal-window";
import {useDispatch} from "react-redux";
import {addTaskAC} from "../../actions/action";

const AddTaskBlock = () => {
    const [hide, setHide] = useState<Boolean>(false);
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState("");
    const [newDescriptionTask, setNewDescriptionTask] = useState("");

    const hideModalWindow = (): void => {
        setHide(!hide);
    };

    const onChangeTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    };

    const onChangeTasDescription = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setNewDescriptionTask(e.target.value);
    };

    const addTask = () => {
        if (newTask.length === 0) {
            return setHide(!hide)
        }
        dispatch(addTaskAC({newTask, newDescriptionTask}));
        setNewTask('')
        setHide(!hide);
    };

    return (
        <div>
            <Controller
                text="Add task"
                className="addTaskBtn"
                onClick={hideModalWindow}
            />
            {hide && <ModalWindow onChangeTaskName={onChangeTaskName} onChangeTasDescription={onChangeTasDescription}
                                  addTask={addTask} hideModalWindow={hideModalWindow}/>}
        </div>
    );
};

export default AddTaskBlock;