import {observer} from 'mobx-react'
import React from 'react';

@observer
class TodoView extends React.Component {
  onToggleCompleted = () => {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

  onRename = () => {
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || todo.task;
  }
  render() {
    const todo = this.props.todo;
    const person = this.props.person

    return (
      <div>

        <li onDoubleClick={ this.onRename }>
        <input
          type='checkbox'
          checked={ todo.report }
          onChange={ this.onToggleCompleted }
        />
        { todo.task }, 
        { todo.assignee
          ? <small>&nbsp;{ todo.assignee.name }, </small>
          : null
        }<br></br>
        <input 
          value={person? person.name: ''}  
          onChange={(event)=>{
            person?
            person.name = event.target.value :
            alert('hardcode another person into the peopleStore ')
            } }/>
        </li>
 
      </div>
      
    );
  }

}


export default TodoView