import React from "react";
import TodoListItem from "../Common/Todo-list-item";
import "./todo-list.scss";

const TodoList = () => {

    return (
        <table className="table">
            <thead className="table__header">
            <tr className="todo-list-table-row">
                <th className="todo-list-table-row__task-title">Task</th>
                <th className="todo-list-table-row__task-btn">Edit</th>
                <th className="todo-list-table-row__task-btn">Delete</th>
            </tr>
            </thead>

            <tbody className="table-group-divider">
            <TodoListItem/>
            </tbody>
        </table>

    );
};

export default TodoList;
