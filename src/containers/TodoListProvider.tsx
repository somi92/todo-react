import { connect, Dispatch } from 'react-redux';
import { toggleDone, removeTodo } from '../state/todoActions';
import TodoList, { TodoListProps } from '../components/TodoList';

function mapStateToProps(state: TodoAppState): Partial<TodoListProps> {
    return {
        todos: state.todos
    };
}

function mapDispatchToProps(dispatch: Dispatch<TodoAppState>): Partial<TodoListProps> {
    return {
        onToggleDone: (id) => {
            dispatch(toggleDone(id));
        },
        onRemove: (id) => {
            dispatch(removeTodo(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);