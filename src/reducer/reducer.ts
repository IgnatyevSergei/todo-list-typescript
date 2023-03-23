import {ADD_TASK} from "../actions/action";

export type TaskInfoItemType = {
    taskName: string,
    taskDescription: string,
    id: number | null
}

type InitialStateType = {
    taskInfo: Array<TaskInfoItemType>
}

const initialState: InitialStateType = {
    taskInfo: []
}

type ActionType = {
    type: string;
    payload: any;
};

const addTask = (state: InitialStateType, {
    newTask,
    newDescriptionTask
}: { newTask: string, newDescriptionTask: string }) => {
    console.log(newTask, newDescriptionTask)
    const task = {
        taskName: newTask,
        taskDescription: newDescriptionTask,
        id: Date.now()
    }
    return {
        ...state,
        taskInfo: [...state.taskInfo, task]
    }
}

export const reducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_TASK:
            console.log(action.payload)
            return addTask(state, action.payload)
                ;
        default:
            return state

    }
}