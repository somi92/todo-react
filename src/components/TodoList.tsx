import * as React from 'react';
import Todo from './Todo';

export interface TodoListProps {
    todos: Todo[];
    onToggleDone: (id: number) => void;
    onRemove: (id: number) => void;
}

export default class TodoList extends React.Component<TodoListProps, {}> {

    constructor(props: TodoListProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <span># of todos: {this.props.todos.length}</span>
                {this.props.todos.map(todo =>
                    <Todo
                        key={todo.id}
                        todo={todo}
                        onToggleDone={this.props.onToggleDone}
                        onRemove={this.props.onRemove}
                    />)}
            </div>
        );
    }
}
