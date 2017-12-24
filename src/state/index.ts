import { combineReducers } from 'redux';
import todos from './todosReducers';

const reducer = combineReducers<TodoAppState>({
    todos: todos
});

export default reducer;