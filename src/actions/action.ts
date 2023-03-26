
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const GET_TASK_ID = "GET_TASK_ID";

type TaskType = {
  newTask: string;
  newDescriptionTask: string;
};

type AddTaskType = {
  type: typeof ADD_TASK;
  payload: TaskType;
};

type EditTaskType = {
  type: typeof EDIT_TASK;
  payload: PayloadEditTaskType
};

type RemoveTaskType = {
  type: typeof REMOVE_TASK;
  payload: number | null;
};

type GetTaskIdType = {
  type: typeof GET_TASK_ID,
  payload: number|null
}

export const addTaskAC = (task: TaskType): AddTaskType => ({
  type: ADD_TASK,
  payload: task,
});

export type PayloadEditTaskType = {
  task: string;
  descriptionTask: string;
  id: number|null
  hashtag: string
};

export const editTaskAC = (task:PayloadEditTaskType): EditTaskType => ({
  type: EDIT_TASK,
  payload: task,
});

export const removeTaskAC = (id: number|null): RemoveTaskType => ({
  type: REMOVE_TASK,
  payload: id,
});

export const getTaskIdAC = (id:number|null):GetTaskIdType => ({type:GET_TASK_ID, payload:id})

export type ActionsType = ReturnType<typeof addTaskAC> | ReturnType<typeof editTaskAC> | ReturnType<typeof removeTaskAC> | ReturnType<typeof getTaskIdAC>