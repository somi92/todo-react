interface Action {
    type: 'ADD_TODO' | 'TOGGLE_DONE' | 'REMOVE_TODO',
    payload: {
        id: number,
        text: string
    }
}