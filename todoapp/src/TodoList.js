import React from 'react';
import './TodoList.css';


function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="TodoList">
      {todos.map((todo, idx) => <li key={idx}>{todo}</li>)}
    </ul>
  )
};

export default TodoList;
