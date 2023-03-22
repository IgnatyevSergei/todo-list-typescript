import React from "react";
import Controller from "../Cotroller/controller";
import "./todo-list-item.scss";
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'

type TodoListItemPropsType = {
  taskName: string;
};

const TodoListItem = ({ taskName }: TodoListItemPropsType) => {
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
