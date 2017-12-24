import * as React from 'react';

export interface TodoProps {
    todo: Todo;
    onToggleDone: (id: number) => void;
    onRemove: (id: number) => void;
}

export default function Todo(props: TodoProps) {
    return (
        <div className={`Todo-item X-Center card bg-${props.todo.style} text-white`}>
            <div className="card-body">
                <h4 className="card-title">{props.todo.text}</h4>
                <div className="Todo-options form-check">
                    <label className="form-check-label">
                        <input 
                            type="checkbox" 
                            className="form-check-input Clickable" 
                            checked={props.todo.checked}
                            onChange={onChecked.bind(null, props)}
                        /> Done
                    </label>
                    <button 
                        onClick={onRemove.bind(null, props)} 
                        type="button" 
                        className="Todo-remove btn btn-dark rounded-circle"
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    );
}

const onChecked = (props: TodoProps) => {
    props.onToggleDone(props.todo.id);
};

const onRemove = (props: TodoProps) => {
    props.onRemove(props.todo.id);
};