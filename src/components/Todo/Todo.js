import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  console.log(todos);
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}>
      <div className='todo_Cont'>
        <input type={"checkbox"} className='checkbox' />
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
      </div>
      <div className='buttons'>
        <div className='remove_Cont' onClick={() => removeTodo(todo.id)}>
          <text className='remove'>Удалить</text>
        </div>
        <div className='space' />
        <div
          className='edit_Cont'
          onClick={() => setEdit({ id: todo.id, value: todo.text })}>
          <text className='edit'>Редактировать</text>
        </div>
      </div>
    </div>
  ));
};

export default Todo;
