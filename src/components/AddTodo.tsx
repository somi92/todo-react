import * as React from 'react';
import { FormControl, Button } from 'react-bootstrap';

export interface AddTodoProps {
    onAddTodo: (text: string) => void;
}

export interface AddTodoState {
    text: string;
}

export default class AddTodo extends React.Component<AddTodoProps, AddTodoState> {

    constructor(props: AddTodoProps) {
        super(props);
        this.state = {
            text: ''
        };
    }

    public render() {
        return (
            <div className="Todo-add">
                <FormControl
                    className="Todo-add-input"
                    type="text"
                    value={this.state.text}
                    placeholder="Enter TODO item and press Enter or click Add..."
                    onChange={this._handleOnChange}
                    onKeyPress={this._handleOnKeyPress}
                />
                <Button onClick={this._handleOnAddClick} className="Todo-button" bsStyle="primary">Add</Button>
            </div>
        );
    }

    private _handleOnChange = (e: any) => {
        this.setState({ text: e.target.value });
    }

    private _handleOnKeyPress = (e: any) => {
        if (e.which === 13 && this.state.text) {
            this._addTodo();
        }
    }

    private _handleOnAddClick = () => {
        if (this.state.text) {
            this._addTodo();
        }
    }

    private _addTodo = () => {
        this.props.onAddTodo(this.state.text);
        this.setState({ text: '' });
    }
}
