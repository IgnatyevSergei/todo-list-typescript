import React from "react";

export const ADD_TASK = 'ADD_TASK'
export const EDIT_TASK = 'EDIT_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'

type TaskType = {
    newTask:string| undefined,
    newDescriptionTask:string| undefined,
}

export const addTaskAC = (task:TaskType) => ({type:ADD_TASK, payload:task});
export const editTaskAC = (event:React.MouseEvent<HTMLElement, MouseEvent>) => ({type:EDIT_TASK, payload:event})
export const removeTaskAC = (event:React.MouseEvent<HTMLElement, MouseEvent>) => ({type:REMOVE_TASK, payload:event})