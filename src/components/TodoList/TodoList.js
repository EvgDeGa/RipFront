import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";

export const TodoList = (props) => {
  const add_item = async () => {
    return await addItem("http://localhost:8000/todo/");
  };

  const [todos, setTodods] = useState(addItem("http://localhost:8000/todo/"));
  console.log("todos", todos);

  async function addItem(url) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log("sad", result);
      return result;
    } catch (e) {
      console.error("Ошибка:", e);
    }
  }
  // const todos = props.todos;
  console.log("ss", todos);
  const addTodo = (todo) => {
    // if (!todo.text || /^\s*$/.test(todo.text)) {
    //   return;
    // }

    // const newTodos = [todo, ...todos];

    props.add_item(todo);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    // setTodos((prev) =>
    //   prev.map((item) => (item.id === todoId ? newValue : item))
    // );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    // setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    // setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Что нужно сделать</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
};
