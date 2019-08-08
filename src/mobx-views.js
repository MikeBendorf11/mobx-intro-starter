import {observer} from 'mobx-react'
import React from 'react';
import TodoView from './mobx-views2'
import {observable} from 'mobx'

var peopleStore = observable([
  { name: "Michel" },
  { name: "Me" }
]);

@observer
class TodoList extends React.Component {
  constructor(props){
    super(props)
    const store = this.props.store;
    store.todos[0].assignee = peopleStore[0];
    store.todos[1].assignee = peopleStore[1];
    peopleStore[0].name = "Michel Weststrate";
  }
  
  onNewTodo = () => {
    this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'));
  }
  render() {
    const store = this.props.store;
    // store.todos[0].assignee = peopleStore[0];
    // store.todos[1].assignee = peopleStore[1];
    // peopleStore[0].name = "Michel Weststrate";
    return (
      <div>
        { store.report }
        <ul>
        { store.todos.map(
          (todo, idx) => <TodoView todo={ todo } key={ idx } person={peopleStore[idx]}/>
        ) }
        </ul>
        { store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
        <button onClick={ this.onNewTodo }>New Todo</button>
        <small> (double-click a todo to edit)</small>
        
      </div>
    );
  }
}

export default TodoList