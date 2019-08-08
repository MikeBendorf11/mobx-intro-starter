import React from 'react';
import ObservableTodoStore from './mobx-class'
import TodoList from './mobx-views'


const observableTodoStore = new ObservableTodoStore();
observableTodoStore.addTodo('Task 1');
observableTodoStore.addTodo('Task 2');

function App() {
  return (
    <div className="App">
      <TodoList store={ observableTodoStore } />
    </div>
  );
}

export default App;
