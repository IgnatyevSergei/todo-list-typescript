import {
    ActionsType,
    ADD_TASK,
    EDIT_TASK,
    FILTER_BY_HASHTAG,
    GET_TASK_ID,
    PayloadEditTaskType,
    REMOVE_TASK
} from "../actions/action";

export type TaskInfoItemType = {
    taskName: string;
    taskDescription: string;
    id: number | null;
    hashtag: string
};


export type InitialStateType = {
    taskInfo: Array<TaskInfoItemType>;
    taskIdForEditTask: number,
    taskInfoFilter: Array<TaskInfoItemType>

};

const initialState: InitialStateType = {
    taskInfo: [],
    taskIdForEditTask: 0,
    taskInfoFilter: []
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
            return {
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
        taskInfoFilter: [...state.taskInfo, task]
    };
};

const removeTask = (
    state: InitialStateType,
    id: number | null
): InitialStateType => {
    const {taskInfo} = state;

    const taskIndex = taskInfo.findIndex((item) => item.id === id);

    return {
        ...state,
        taskInfo: [
            ...taskInfo.slice(0, taskIndex),
            ...taskInfo.slice(taskIndex + 1),
        ],
        taskInfoFilter: [
            ...taskInfo.slice(0, taskIndex),
            ...taskInfo.slice(taskIndex + 1),
        ]
    };
};

const getTaskId = (state: InitialStateType, id: number | null): InitialStateType => {
    const indexTask = state.taskInfo.findIndex((item) => item.id === id)
    return {
        ...state,
        taskIdForEditTask: indexTask
    }
}

const editTask = (state: InitialStateType, {task, descriptionTask, id}: PayloadEditTaskType) => {
    const modernName = () => {
        if (task.includes('#')) {
            const hashtagIndex = task.indexOf('#')
            const hashtagWord = task.slice(hashtagIndex)
            return {
                taskName: task.slice(0, hashtagIndex),
                taskDescription: descriptionTask,
                id: id,
                hashtag: hashtagWord
            };
        } else {
            return {
                taskName: task,
                taskDescription: descriptionTask,
                id: id,
                hashtag: ''
            }
        }
    }
    const {taskInfo} = state;
    const taskIndex = taskInfo.findIndex((item) => item.id === id);
    const editTask = modernName()
    return {
        ...state,
        taskInfo: [
            ...taskInfo.slice(0, taskIndex),
            editTask,
            ...taskInfo.slice(taskIndex + 1),
        ],
        taskInfoFilter: [
            ...taskInfo.slice(0, taskIndex),
            editTask,
            ...taskInfo.slice(taskIndex + 1),
        ]
    }
}

const filterByHashtag = (state: InitialStateType, hashtag: string | null) => {
    const {taskInfo} = state
    if (hashtag?.trim() === 'All') {
        return {
            ...state,
            taskInfo: [...state.taskInfoFilter]
        }
    } else {
        return {
            ...state,
            taskInfo: taskInfo.filter((item) => item.hashtag.trim() === hashtag?.trim())
        }
    }
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
            return getTaskId(state, action.payload);
        case EDIT_TASK:
            return editTask(state, action.payload);
        case FILTER_BY_HASHTAG:
            return filterByHashtag(state, action.payload)
        default:
            return state;
    }
};
