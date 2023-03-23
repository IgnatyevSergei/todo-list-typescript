import React from "react";
import Controller from "../Cotroller/controller";
import "./todo-list-item.scss";
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import {useSelector} from "react-redux";

type TodoListItemPropsType = {
  taskName: string;
};

const TodoListItem = ({ taskName }: TodoListItemPropsType) => {
    const state = useSelector(state => state)
    console.log(state)

  return (
    <tr>
      <td className='table-task-content'>{taskName}</td>
      <td>
        <Controller className="itemBtn" text={<AiFillEdit />} />
      </td>
      <td>
        <Controller className="itemBtn" text={<AiFillDelete />} />
      </td>
    </tr>
  );
};

export default TodoListItem;
