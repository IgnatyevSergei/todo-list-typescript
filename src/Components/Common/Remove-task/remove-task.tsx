import React from 'react';
import Controller from "../Cotroller";
import {AiFillDelete} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {removeTaskAC} from "../../../actions/action";

type RemoveTaskPropsType = {
    id: number | null
}

const RemoveTask = ({id}: RemoveTaskPropsType) => {
    const dispatch = useDispatch();

    const removeTask = (id: number | null) => {
        dispatch(removeTaskAC(id));
    };

    return (
        <div>
            <Controller text={<AiFillDelete/>} className="itemBtn" onClick={() => removeTask(id)}/>
        </div>
    );
};

export default RemoveTask;