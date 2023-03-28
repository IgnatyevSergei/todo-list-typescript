import React, {useEffect, useState} from 'react';
import Controller from "../Cotroller";
import ModalWindow from "../Modal-window";
import {useDispatch, useSelector} from "react-redux";
import {AiFillEdit} from "react-icons/ai";
import {InitialStateType} from "../../../reducer/reducer";
import {editTaskAC, getTaskIdAC} from "../../../actions/action";

type EditTaskPropsType = {
    id: number | null
}

const EditTask = ({id}: EditTaskPropsType) => {
    const state = useSelector((state: InitialStateType) => state)
    const [hide, setHide] = useState<Boolean>(false)
    const dispatch = useDispatch();
    const [task, setTask] = useState<string>(``);
    const [descriptionTask, setDescriptionTask] = useState<string>('');

    useEffect(() => {
        setTask((state.taskInfo[state.taskIdForEditTask]?.taskName))
        setDescriptionTask((state.taskInfo[state.taskIdForEditTask]?.taskDescription))
    }, [state])

    const hideModalWindow = (): void => {
        setHide(!hide);
    };

    const onChangeTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const onChangeTasDescription = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setDescriptionTask(e.target.value);
    };

    const getTaskId = (id: number | null) => {
        dispatch(getTaskIdAC(id))
        setHide(!hide);
    };

    const editTask = () => {
        const id = state.taskInfo[state.taskIdForEditTask].id
        const hashtag = state.taskInfo[state.taskIdForEditTask].hashtag
        dispatch(editTaskAC({task, descriptionTask, id, hashtag}))
        setHide(!hide);
    }


    return (
        <div>
            <Controller text={<AiFillEdit/>} className="itemBtn" onClick={() => getTaskId(id)}/>
            {hide && <ModalWindow onChangeTaskName={onChangeTaskName} onChangeTasDescription={onChangeTasDescription}
                                  addTask={editTask} hideModalWindow={hideModalWindow} valueTaskName={task}
                                  valueTaskDescription={descriptionTask}/>}
        </div>
    );
};

export default EditTask;