import {ActionsType, ADD_TASK, EDIT_TASK, GET_TASK_ID, PayloadEditTaskType, REMOVE_TASK} from "../actions/action";

export type TaskInfoItemType = {
  taskName: string;
  taskDescription: string;
  id: number | null;
  hashtag:string
};

export type InitialStateType = {
  taskInfo: Array<TaskInfoItemType>;
  taskIdForEditTask: number
};

const initialState: InitialStateType = {
  taskInfo: [],
  taskIdForEditTask: 0
};

const addTask = (
  state: InitialStateType,
  {
    newTask,
    newDescriptionTask,
  }: { newTask: string; newDescriptionTask: string }
) => {
   const modernName = () => {
       if (newTask.includes('#')) {
           const hashtagIndex = newTask.indexOf('#')
           const hashtagWord = newTask.slice(hashtagIndex)
           return  {
               taskName: newTask.slice(0, hashtagIndex),
               taskDescription: newDescriptionTask,
               id: Date.now(),
               hashtag: hashtagWord
           };
       } else {
           return {
               taskName: newTask,
               taskDescription: newDescriptionTask,
               id: Date.now(),
               hashtag: ''
           }
       }
   }
  const task = modernName();
  return {
    ...state,
    taskInfo: [...state.taskInfo, task],
  };
};

const removeTask = (
  state: InitialStateType,
  id: number | null
): InitialStateType => {
  const { taskInfo } = state;

  const taskIndex = taskInfo.findIndex((item) => item.id === id);

  return {
    ...state,
    taskInfo: [
      ...taskInfo.slice(0, taskIndex),
      ...taskInfo.slice(taskIndex + 1),
    ],
  };
};

const getTaskId = (state:InitialStateType, id:number|null):InitialStateType => {
  const indexTask = state.taskInfo.findIndex((item)=> item.id === id)
  return {
    ...state,
    taskIdForEditTask: indexTask
  }
}

const editTask = (state:InitialStateType, {task, descriptionTask, id, hashtag}:PayloadEditTaskType) => {
  const { taskInfo } = state;
  const taskIndex = taskInfo.findIndex((item) => item.id === id);
  const modifiedTask = {
    taskName: task,
    taskDescription: descriptionTask,
    id: id,
    hashtag: hashtag
  }
  return {...state,
    taskInfo: [
      ...taskInfo.slice(0, taskIndex),
        modifiedTask,
      ...taskInfo.slice(taskIndex + 1),
    ],}

}

export const reducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case ADD_TASK:
      return addTask(state, action.payload);
    case REMOVE_TASK:
      return removeTask(state, action.payload);
    case GET_TASK_ID:
      return getTaskId(state, action.payload)
    case EDIT_TASK:
      return editTask(state, action.payload)
    default:
      return state;
  }
};
