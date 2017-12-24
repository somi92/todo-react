import * as React from 'react';
import './App.css';
import 'bootstrap-css-only';

import TodoListProvider from './containers/TodoListProvider';
import AddTodoHandler from './containers/AddTodoHandler';

const logo = require('./logo.svg');

class App extends React.Component {

  constructor(props: {}) {
    super(props);
  }

  public render() {

    return (

      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo App</h2>
        </div>

        <AddTodoHandler />
        <TodoListProvider />

      </div>
    );
  }
}

export default App;
