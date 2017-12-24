import * as React from 'react';
import './App.css';
import 'bootstrap-css-only';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const logo = require('./logo.svg');

interface AppState {
  todos: Todo[];
}

class App extends React.Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      todos: this.getDefaultTodos()
    };
  }

  public render() {

    return (

      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo App</h2>
        </div>

        <AddTodo onAddTodo={this._onAdd} />
        <TodoList
          todos={this.state.todos}
          onToggleDone={this._onToggleDone}
          onRemove={this._onRemove}
        />

      </div>
    );
  }

  private _onAdd = (text: string) => {
    let id = Math.max(...this.state.todos.map(e => e.id)) + 1;
    this.setState((prevState, props) => {
      return {
        todos: [...prevState.todos, {
          id: id,
          text: text,
          checked: false,
          style: 'danger'
        }]
      };
    });
  }

  private _onToggleDone = (id: number) => {
    this.setState((prevState, props) => {
      let newTodos = prevState.todos.map((t: Todo) => {
        if (t.id === id) {
          let newTodo: Todo = { id: t.id, text: t.text, checked: !t.checked, style: !t.checked ? 'success' : 'danger' };
          return newTodo;
        }
        return t;
      });
      return {
        todos: newTodos
      };
    });
  }

  private _onRemove = (id: number) => {
    let index = this.state.todos.findIndex(e => e.id === id);
    let todos = this.state.todos.slice();
    todos.splice(index, 1);
    this.setState((prevState, props) => {
      return {
        todos: todos
      };
    });
  }

  private getDefaultTodos(): Todo[] {
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
}

export default App;
