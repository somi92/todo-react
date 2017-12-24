const defaultState: Todo[] = getDefaultTodos();

export default function todosReducer(state: Todo[] = defaultState, action: Action): Todo[] {
    switch (action.type) {
        case 'ADD_TODO':
            let currentMaxId = Math.max(...state.map(e => e.id));
            let id = currentMaxId >= 0 ? currentMaxId + 1 : 1;
            return [
                ...state,
                {
                    id: id,
                    checked: false,
                    text: action.payload.text,
                    style: 'danger'
                }
            ];
        case 'TOGGLE_DONE':
            return state.map((t: Todo) => {
                if (t.id === action.payload.id) {
                    let newTodo: Todo = {
                        id: t.id,
                        text: t.text,
                        checked: !t.checked,
                        style: !t.checked ? 'success' : 'danger'
                    };
                    return newTodo;
                }
                return t;
            });
        case 'REMOVE_TODO':
            let index = state.findIndex(e => e.id === action.payload.id);
            let todos = state.slice();
            todos.splice(index, 1);
            return todos;
        default:
            return state;
    }
}

function getDefaultTodos(): Todo[] {
    return [
        {
            id: 1,
            checked: true,
            style: 'success',
            text: 'Learn how to use React library for creating component based JavaScript apps'
        },
        {
            id: 2,
            checked: false,
            style: 'danger',
            text: 'Learn how to use Redux library for state management'
        }
    ];
}