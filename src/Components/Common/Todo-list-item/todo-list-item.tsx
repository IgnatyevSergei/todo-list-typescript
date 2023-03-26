import React, {useMemo} from "react";
import "./todo-list-item.scss";
import {useSelector} from "react-redux";
import {InitialStateType, TaskInfoItemType} from "../../../reducer/reducer";
import EditTask from "../Edit-task";
import RemoveTask from "../Remove-task";


const TodoListItem = (): JSX.Element => {
    const state = useSelector((state: InitialStateType) => state.taskInfo);

    const selectTask = useMemo(() => {
        if (state.length === 0) {
            return (
                <tr>
                    <td colSpan={3} className="table-task-content">
                        Add task
                    </td>
                </tr>
            );
        }
        return (
            <>
                {state.map((item: TaskInfoItemType) => {
                    return (
                        <tr key={item.id}>
                            <td className="table-task-content">{item.taskName} <span className='hashTag'>{item.hashtag}</span> </td>
                            <td>
                                <EditTask id={item.id}/>
                            </td>
                            <td>
                                <RemoveTask id={item.id}/>
                            </td>
                        </tr>)
                })}</>
        )
    }, [state]);

    return (<>{selectTask}</>);
};

export default TodoListItem;
