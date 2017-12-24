export function addTodo(text: string): Action {
    return {
        type: 'ADD_TODO',
        payload: {
            id: 0,
            text: text
        }
    };
}

export function toggleDone(id: number): Action {
    return {
        type: 'TOGGLE_DONE',
        payload: {
            id: id,
            text: ''
        }
    };
}

export function removeTodo(id: number): Action {
    return {
        type: 'REMOVE_TODO',
        payload: {
            id: id,
            text: ''
        }
    };
}