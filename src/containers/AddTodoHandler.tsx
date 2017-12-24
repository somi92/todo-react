import { connect, Dispatch } from 'react-redux';
import { addTodo } from '../state/todoActions';
import AddTodo, { AddTodoProps } from '../components/AddTodo';

function mapDispatchToProps(dispatch: Dispatch<TodoAppState>): Partial<AddTodoProps> {
    return {
        onAddTodo: (text: string) => {
            dispatch(addTodo(text));
        }
    };
}

export default connect(null, mapDispatchToProps)(AddTodo);